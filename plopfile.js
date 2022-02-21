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
						path: data.destination + '{{dashCase name}}.value-object.ts',
						templateFile: data.origin + 'templates/value-object/value-object.hbs'
					},
					{
						type: 'add',
						path: data.destination + 'tests/{{dashCase name}}.value-object.spec.ts',
						templateFile: data.origin + 'templates/value-object/value-object.spec.hbs'
					}
				);
			} else if (data.option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.aggregate.ts',
						templateFile: data.origin + 'templates/entity/aggregate.hbs'
					},
					{
						type: 'add',
						path: data.destination + 'tests/{{dashCase name}}.aggregate.spec.ts',
						templateFile: data.origin + 'templates/entity/aggregate.spec.hbs'
					}
				);
			} else if (data.option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.entity.ts',
						templateFile: data.origin + 'templates/entity/entity.hbs'
					},
					{
						type: 'add',
						path: data.destination + 'tests/{{dashCase name}}.entity.spec.ts',
						templateFile: data.origin + 'templates/entity/entity.spec.hbs'
					}
				);
			} else if (data.option === 'use-case') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.use-case.ts',
						templateFile: data.origin + 'templates/use-case/use-case.hbs'
					},
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.dto.ts',
						templateFile: data.origin + 'templates/use-case/dto.hbs'
					},
					{
						type: 'add',
						path: data.destination + 'tests/{{dashCase name}}.use-case.spec.ts',
						templateFile: data.origin + 'templates/use-case/use-case.spec.hbs'
					}
				);
			} else if (data.option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.mapper.ts',
						templateFile: data.origin + 'templates/mapper/mapper.hbs'
					},
				);
			}
			return actions;
		}
	});
};
