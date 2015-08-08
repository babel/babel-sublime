import json
import os
import platform
import sublime
import sublime_plugin
import subprocess

# monkeypatch `Region` to be iterable
sublime.Region.totuple = lambda self: (self.a, self.b)
sublime.Region.__iter__ = lambda self: self.totuple().__iter__()

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
			w = sublime.Window.new_file(self.view.window())
			w.settings().set('default_extension', 'js')
			w.set_syntax_file(self.view.settings().get('syntax'))
			w.set_scratch(True)
			w.insert(edit, 0, code)

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
			start, end = sel
			if start != end:
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
	env = None
	startupinfo = None
	if os_name == 'osx':
		# GUI apps in OS X doesn't contain .bashrc/.zshrc set paths
		env = os.environ.copy()
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
