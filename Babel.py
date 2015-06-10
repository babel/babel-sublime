import sublime
import sublime_plugin
import json
from os.path import dirname, realpath, join

from .node_bridge import node_bridge

# monkeypatch `Region` to be iterable
sublime.Region.totuple = lambda self: (self.a, self.b)
sublime.Region.__iter__ = lambda self: self.totuple().__iter__()

BIN_PATH = join(sublime.packages_path(), dirname(realpath(__file__)), 'babel-transform.js')

class BabelCommand(sublime_plugin.TextCommand):
	def run(self, edit):
		view = self.view

		selected_text = self.get_text()
		code = self.babelify(selected_text)

		if code:
			w = sublime.Window.new_file(view.window())
			w.settings().set('default_extension', 'js')
			w.set_syntax_file(view.settings().get('syntax'))
			w.set_scratch(True)
			w.insert(edit, 0, code)

	def babelify(self, data):
		try:
			return node_bridge(data, BIN_PATH, [json.dumps({
				'filename': self.view.file_name(),
				'debug': self.get_setting('debug'),
				'ensure_newline_at_eof': self.get_setting('ensure_newline_at_eof'),
				'use_local_babel': self.get_setting('use_local_babel'),
				'node_modules': self.get_setting('node_modules'),
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
			start, end = sel
			if start != end:
				return True
		return False

	def get_setting(self, key):
		settings = self.view.settings().get('Babel')
		if settings is None:
			settings = sublime.load_settings('Babel.sublime-settings')
		return settings.get(key)
