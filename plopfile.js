const Handlebars = require('handlebars');

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

module.exports = function (plop) {
	plop.setGenerator('resource', {
		prompts: [
			{ type: "input", name: "name" },
			{ type: "input", name: "option" },
			{ type: "input", name: "type" },
			{ type: "input", name: "destination" },
			{ type: "input", name: "origin" },
		],
		actions: function (data) {
			const actions = [];

			console.table(data);

			if (data.option === 'value-object') {
				actions.push(
					{
						type: 'add',
						path: data.destination + 'modules/{{dashCase name}}.value-object.ts',
						templateFile: data.origin + 'templates/value-object/value-object.hbs'
					},
					{
						type: 'add',
						path: data.destination + 'modules/tests/{{dashCase name}}.value-object.spec.ts',
						templateFile: data.origin + 'templates/value-object/value-object.spec.hbs'
					}
				);
			} else if (data.option === 'aggregate') {
				// actions.push(
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/aggregates/{{dashCase name}}.aggregate.ts',
				// 		templateFile: './templates/aggregate/aggregate.hbs'
				// 	},
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/aggregates/tests/{{dashCase name}}.aggregate.spec.ts',
				// 		templateFile: './templates/aggregate/tests/aggregate.spec.hbs'
				// 	}
				// );
			} else if (data.option === 'entity') {
				// actions.push(
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/entities/{{dashCase name}}.entity.ts',
				// 		templateFile: './templates/entity/entity.hbs'
				// 	},
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/entities/tests/{{dashCase name}}.entity.spec.ts',
				// 		templateFile: './templates/entities/entity.spec.hbs'
				// 	}
				// );
			} else if (data.option === 'use-case') {
				// actions.push(
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.dto.ts',
				// 		templateFile: './templates/application/use-cases/dto.hbs'
				// 	},
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/application/use-cases/create-{{dashCase name}}.use-case.ts',
				// 		templateFile: './templates/application/use-case/use-case.hbs'
				// 	},
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/application/use-cases/tests/create-{{dashCase name}}.use-case.spec.ts',
				// 		templateFile: './templates/application/use-case/use-case.spec.hbs'
				// 	}
				// );
			} else if (data.option === 'mapper') {
				// actions.push(
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/infra/mappers/tests/{{dashCase name}}.mapper.spec.ts',
				// 		templateFile: './templates/infra/mapper/mapper.spec.hbs'
				// 	},
				// 	{
				// 		type: 'add',
				// 		path: './modules/{{dashCase name}}/infra/mappers/{{dashCase name}}.mapper.ts',
				// 		templateFile: './templates/infra/mapper/mapper.hbs'
				// 	}
				// );
			}
			return actions;
		}
	});
};
