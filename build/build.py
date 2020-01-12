import sublime
import sublime_plugin


__all__ = ['BuildBabelPackageCommand']


class BuildBabelPackageCommand(sublime_plugin.ApplicationCommand):
    def run(self):
        from sublime_lib import ResourcePath
        from pathlib import Path
        from shutil import rmtree

        package_path = Path(__file__).parent.parent
        syntax_path = ResourcePath('Packages/babel-sublime/JavaScript (Babel).sublime-syntax')
        test_directory = package_path / 'tests'

        print(test_directory, syntax_path)

        rmtree(str(test_directory), ignore_errors=True)
        test_directory.mkdir()

        sublime.run_command('build_js_custom_tests', {
            'syntax_path': str(syntax_path),
            'suites': ['base', 'flow', 'jsx', 'string_object_keys'],
            'destination_directory': str(test_directory),
        })
