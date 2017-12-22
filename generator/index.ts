import * as Generator from 'yeoman-generator';

export = class extends Generator {
	constructor(args: string | string[], options: {}) {
		super(args, options);
	}
	init() {
		return this.prompt([
			{
				name: 'moduleName',
				message: 'What do you want to name the module?',
			},
			{
				name: 'moduleDescription',
				message: 'How do you describe the module?',
			},
			{
				name: 'moduleAuthor',
				message: 'What\'s your name?',
			},
		]).then(props => {
			const vars = {
				moduleName: props.moduleName,
				moduleDescription: props.moduleDescription,
				moduleAuthor: props.moduleAuthor,
			};

			this.destinationRoot(this.destinationPath('src', props.moduleName));

			this.fs.copyTpl(this.templatePath(), this.destinationPath(), vars);

			const mv = (from: string, to: string) => {
				return this.fs.move(this.destinationPath(from), this.destinationPath(to), vars);
			};

			mv('_package.json', 'package.json');
			mv('_readme.md', 'readme.md');
			mv('_tsconfig.json', 'tsconfig.json');
		});
	}
}
