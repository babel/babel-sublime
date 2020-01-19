import sublime
import sublime_plugin


__all__ = ['BuildBabelPackageCommand']


BABEL_CONFIGURATION = {
    'name': 'JavaScript (Babel)',
    'scope': 'source.js',
    'file_extensions': [ 'js', 'jsx', 'es6', 'babel' ],
    'flow_types': True,
    'jsx': True,
    'string_object_keys': True,
    'custom_templates': {
        'styled_components': True,
    },
}


class BuildBabelPackageCommand(sublime_plugin.ApplicationCommand):
    def run(self):
        from sublime_lib import ResourcePath
        from pathlib import Path
        from shutil import rmtree

        package_path = Path(__file__).parent.parent
        syntax_path = ResourcePath('Packages/babel-sublime/JavaScript (Babel).sublime-syntax')
        test_directory = package_path / 'tests'


        rmtree(str(test_directory), ignore_errors=True)
        test_directory.mkdir()

        print("Building syntax…")
        sublime.active_window().run_command('build_js_custom_syntax', {
            'name': 'Babel',
            'configuration': BABEL_CONFIGURATION,
            'destination_path': str(syntax_path.file_path()),
        })

        print("Building tests…")
        sublime.run_command('build_js_custom_tests', {
            'syntax_path': str(syntax_path),
            'suites': ['base', 'flow', 'jsx', 'string_object_keys'],
            'destination_directory': str(test_directory),
        })
        print('Done.')
