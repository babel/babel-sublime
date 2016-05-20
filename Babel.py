import json
import os
import platform
import subprocess

import sublime
import sublime_plugin

if platform.system() == 'Darwin':
    os_name = 'osx'
elif  platform.system() == 'Windows':
    os_name = 'windows'
else:
    os_name = 'linux'

BIN_PATH = os.path.join(
    sublime.packages_path(),
    os.path.dirname(os.path.realpath(__file__)),
    'babel-transform.js'
)

class BabelCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        selected_text = self.get_text()
        code = self.babelify(selected_text)

        if code:
            window = self.view.window()
            other_pane = self.determine_other_pane()
            window.focus_group(other_pane)
            w = window.new_file()
            w.settings().set('default_extension', 'js')
            w.set_syntax_file(self.view.settings().get('syntax'))
            w.set_scratch(True)
            w.insert(edit, 0, code)

    def determine_other_pane(self):
        window = self.view.window()
        active_group = window.active_group()
        num_groups = window.num_groups()
        layout = window.get_layout()
        cells = layout['cells']
        cols = layout['cols']
        if num_groups == 1:
            # Only pane. Create a new one.
            window.run_command('set_layout', {
                "cols": [0.0, 0.5, 1.0],
                "rows": [0.0, 1.0],
                "cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
                })
            return 1
        elif active_group == num_groups - 1:
            # Last pane in window. Use the previous one.
            return active_group - 1
        elif len(cols) > 2 and cells[active_group][2] == len(cols) - 1:
            # Last pane in row. Use the previous one.
            return active_group - 1
        else:
            # Otherwise, use the next one.
            return active_group + 1

    def babelify(self, data):
        try:
            return node_bridge(data, BIN_PATH, [json.dumps({
                # from sublime
                'filename': self.view.file_name(),
                'newline_at_eof': self.view.settings().get('ensure_newline_at_eof_on_save'),
                # from babel-sublime settings
                'debug': self.get_setting('debug'),
                'use_local_babel': self.get_setting('use_local_babel'),
                'node_modules': self.get_setting_by_os('node_modules'),
                'options': self.get_setting('options')
            })])
        except Exception as e:
            return str(e)

    def get_text(self):
        if not self.has_selection():
            region = sublime.Region(0, self.view.size())
            return self.view.substr(region)

        selected_text = ''
        for region in self.view.sel():
            selected_text = selected_text + self.view.substr(region) + '\n'
        return selected_text

    def has_selection(self):
        for sel in self.view.sel():
            if sel.a != sel.b:
                return True
        return False

    def get_setting(self, key):
        settings = self.view.settings().get('Babel')
        if settings is None:
            settings = sublime.load_settings('Babel.sublime-settings')
        return settings.get(key)

    def get_setting_by_os(self, key):
        setting = self.get_setting(key)
        if setting:
            return setting.get(os_name)


def node_bridge(data, bin, args=[]):
    env = os.environ.copy()
    startupinfo = None
    if os_name == 'osx':
        # GUI apps in OS X don't contain .bashrc/.zshrc set paths
        env['PATH'] += ':/usr/local/bin'
    elif os_name == 'windows':
        startupinfo = subprocess.STARTUPINFO()
        startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
    try:
        p = subprocess.Popen(
            ['node', bin] + args,
            stdout=subprocess.PIPE,
            stdin=subprocess.PIPE,
            stderr=subprocess.PIPE,
            env=env,
            startupinfo=startupinfo
        )
    except OSError:
        raise Exception('Error: Couldn\'t find "node" in "%s"' % env['PATH'])
    stdout, stderr = p.communicate(input=data.encode('utf-8'))
    stdout = stdout.decode('utf-8')
    stderr = stderr.decode('utf-8')
    if stderr:
        raise Exception('Error: %s' % stderr)
    else:
        return stdout
