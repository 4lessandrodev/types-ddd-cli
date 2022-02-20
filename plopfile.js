module.exports = function (plop) {
	plop.setGenerator('resource', {
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the resource name?'
			},
			{
				type: 'list',
				name: 'option',
				message: 'Select your option?',
				choices: [
					{
						type: 'confirm',
						name: 'valueObject',
						message: 'Do you want valueObject?'
					},
					{
						type: 'confirm',
						name: 'aggregate',
						message: 'Do you want Aggregate?'
					},
					{
						type: 'confirm',
						name: 'entity',
						message: 'Do you want Entity?'
					},
					{
						type: 'confirm',
						name: 'useCase',
						message: 'Do you want Use Case?'
					},
					{
						type: 'confirm',
						name: 'mapper',
						message: 'Do you want Mapper?'
					}
				]
			}
		],
		actions: function (data) {
			const actions = [];
			const CMD_PATH = process.cwd();
			const { option } = data;
			if (option === 'valueObject') {
				/** @todo ask user input type to value object */
				data.type = 'string';
				actions.push(
					{
						type: 'add',
						path: CMD_PATH + '/modules/{{dashCase name}}.value-object.ts',
						templateFile: CMD_PATH + '/templates/value-object/value-object.hbs'
					},
					{
						type: 'add',
						path: CMD_PATH + '/modules/tests/{{dashCase name}}.value-object.spec.ts',
						templateFile: CMD_PATH + '/templates/value-object/value-object.spec.hbs'
					}
				);
			} else if (option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: './modules/{{dashCase name}}/aggregates/{{dashCase name}}.aggregate.ts',
						templateFile: './templates/aggregate/aggregate.hbs'
					},
					{
						type: 'add',
						path: './modules/{{dashCase name}}/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
						templateFile: './templates/aggregate/tests/aggregate.spec.hbs'
					}
				);
			} else if (option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: './modules/{{dashCase name}}/entities/{{dashCase name}}.entity.ts',
						templateFile: './templates/entity/entity.hbs'
					},
					{
						type: 'add',
						path: './modules/{{dashCase name}}/entities/tests/{{dashCase name}}.entity.spec.ts',
						templateFile: './templates/entities/entity.spec.hbs'
					}
				);
			} else if (option === 'useCase') {
				actions.push(
					{
						type: 'add',
						path: './modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
						templateFile: './templates/application/use-cases/dto.hbs'
					},
					{
						type: 'add',
						path: './modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
						templateFile: './templates/application/use-case/use-case.hbs'
					},
					{
						type: 'add',
						path: './modules/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
						templateFile: './templates/application/use-case/use-case.spec.hbs'
					}
				);
			} else if (option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: './modules/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
						templateFile: './templates/infra/mapper/mapper.spec.hbs'
					},
					{
						type: 'add',
						path: './modules/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
						templateFile: './templates/infra/mapper/mapper.hbs'
					}
				);
			}
			return actions;
		}
	});
};
