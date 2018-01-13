import yeomanGenerator = require('yeoman-generator');
import isScoped = require('is-scoped');

const notEmpty = (input: string) => input.length > 0;

export = class extends yeomanGenerator {
	constructor(args: string | string[], options: {}) {
		super(args, options);
	}
	init() {
		return this.prompt([
			{
				name: 'moduleName',
				message: 'name:',
				validate(input) {
					if (isScoped(input)) {
						return 'the scope will be applied to the module automatically';
					}
					return notEmpty(input);
				},
			},
			{
				name: 'moduleDescription',
				message: 'description:',
				validate: notEmpty,
			},
			{
				name: 'moduleAuthor',
				message: 'author:',
				validate: notEmpty,
			},
		]).then((props) => {
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
};
