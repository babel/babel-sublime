import os
import platform
import subprocess

IS_OSX = platform.system() == 'Darwin'
IS_WINDOWS = platform.system() == 'Windows'

def node_bridge(data, bin, args=[]):
	env = None
	startupinfo = None
	if IS_OSX:
		# GUI apps in OS X doesn't contain .bashrc/.zshrc set paths
		env = os.environ.copy()
		env['PATH'] += ':/usr/local/bin'
	if IS_WINDOWS:
		startupinfo = subprocess.STARTUPINFO()
		startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
	try:
		p = subprocess.Popen(['node', bin] + args,
			stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE,
			env=env, startupinfo=startupinfo)
	except OSError:
		raise Exception('Couldn\'t find Node.js. Make sure it\'s in your $PATH by running `node -v` in your command-line.')
	stdout, stderr = p.communicate(input=data.encode('utf-8'))
	stdout = stdout.decode('utf-8')
	stderr = stderr.decode('utf-8')
	if stderr:
		raise Exception('Error: %s' % stderr)
	else:
		return stdout
