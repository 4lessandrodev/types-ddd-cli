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
			{ type: "input", name: "system" },
		],
		actions: function (data) {
			const actions = [];

			const separator = '/';
			const destFinishWithDash = data.destination.slice(data.destination.length - 1) === separator;
			const origFinishWithDash = data.origin.slice(data.origin.length - 1) === separator;
			const destStartsWithDash = data.destination[0] === separator;
			const origStartsWithDash = data.origin[0] === separator;
			const isWindows = data.system === 'windows';
			

			if (!destFinishWithDash) { 
				data.destination = data.destination + separator;
			}
			if (!destStartsWithDash && !isWindows) { 
				data.destination = separator + data.destination;
			}
			if (!origFinishWithDash) { 
				data.origin = data.origin + separator;
			}
			if (!origStartsWithDash && !isWindows) { 
				data.origin = separator + data.origin;
			}

			console.log("");
			console.table(data);

			if (data.option === 'value-object') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.value-object.ts',
						templateFile: data.origin + `templates${separator}value-object${separator}value-object.hbs`
					},
					{
						type: 'add',
						path: data.destination + `tests${separator}{{dashCase name}}.value-object.spec.ts`,
						templateFile: data.origin + `templates${separator}value-object${separator}value-object.spec.hbs`
					}
				);
			} else if (data.option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.aggregate.ts',
						templateFile: data.origin + `templates${separator}aggregate${separator}aggregate.hbs`
					},
					{
						type: 'add',
						path: data.destination + `tests${separator}{{dashCase name}}.aggregate.spec.ts`,
						templateFile: data.origin + `templates${separator}aggregate${separator}aggregate.spec.hbs`
					}
				);
			} else if (data.option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.entity.ts',
						templateFile: data.origin + `templates${separator}entity${separator}entity.hbs`
					},
					{
						type: 'add',
						path: data.destination + `tests${separator}{{dashCase name}}.entity.spec.ts`,
						templateFile: data.origin + `templates${separator}entity${separator}entity.spec.hbs`
					}
				);
			} else if (data.option === 'use-case') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.use-case.ts',
						templateFile: data.origin + `templates${separator}use-case${separator}use-case.hbs`
					},
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.dto.ts',
						templateFile: data.origin + `templates${separator}use-case${separator}dto.hbs`
					},
					{
						type: 'add',
						path: data.destination + `tests${separator}{{dashCase name}}.use-case.spec.ts`,
						templateFile: data.origin + `templates${separator}use-case${separator}use-case.spec.hbs`
					}
				);
			} else if (data.option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: data.destination + '{{dashCase name}}.mapper.ts',
						templateFile: data.origin + `templates${separator}mapper${separator}mapper.hbs`
					},
				);
			}
			return actions;
		}
	});
};
