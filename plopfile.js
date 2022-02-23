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
			{ type: "input", name: "platform" },
		],
		actions: function (data) {
			const actions = [];

			const finishWithDash = data.destination.slice(data.destination.length - 1) === '/' || 
			data.destination.slice(data.destination.length - 2) === '\\';
			const startsWithDash = data.destination[0] === '/';
			let initialSeparator = '';
			let separator = '/';
			const isWindows = data.platform === 'windows';

			if (!finishWithDash && !isWindows) { 
				data.destination = data.destination + '/';
			}
			if (!startsWithDash && !isWindows) { 
				data.destination = '/' + data.destination;
			}
			if (isWindows) {
				separator = '\\';
				initialSeparator = separator;
			}

			console.log("");
			console.table(data);

			if (data.option === 'value-object') {
				actions.push(
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.value-object.ts',
						templateFile: data.origin + separator + `templates${separator}value-object${separator}value-object.hbs`
					},
					{
						type: 'add',
						path: data.destination + initialSeparator + `tests${separator}{{dashCase name}}.value-object.spec.ts`,
						templateFile: data.origin + separator + `templates${separator}value-object${separator}value-object.spec.hbs`
					}
				);
			} else if (data.option === 'aggregate') {
				actions.push(
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.aggregate.ts',
						templateFile: data.origin + separator + `templates${separator}aggregate${separator}aggregate.hbs`
					},
					{
						type: 'add',
						path: data.destination + initialSeparator + `tests${separator}{{dashCase name}}.aggregate.spec.ts`,
						templateFile: data.origin + separator + `templates${separator}aggregate${separator}aggregate.spec.hbs`
					}
				);
			} else if (data.option === 'entity') {
				actions.push(
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.entity.ts',
						templateFile: data.origin + separator + `templates${separator}entity${separator}entity.hbs`
					},
					{
						type: 'add',
						path: data.destination + initialSeparator + `tests${separator}{{dashCase name}}.entity.spec.ts`,
						templateFile: data.origin + separator + `templates${separator}entity${separator}entity.spec.hbs`
					}
				);
			} else if (data.option === 'use-case') {
				actions.push(
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.use-case.ts',
						templateFile: data.origin + separator + `templates${separator}use-case${separator}use-case.hbs`
					},
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.dto.ts',
						templateFile: data.origin + separator + `templates${separator}use-case${separator}dto.hbs`
					},
					{
						type: 'add',
						path: data.destination + initialSeparator + `tests${separator}{{dashCase name}}.use-case.spec.ts`,
						templateFile: data.origin + separator + `templates${separator}use-case${separator}use-case.spec.hbs`
					}
				);
			} else if (data.option === 'mapper') {
				actions.push(
					{
						type: 'add',
						path: data.destination + initialSeparator + '{{dashCase name}}.mapper.ts',
						templateFile: data.origin + separator + `templates${separator}mapper${separator}mapper.hbs`
					},
				);
			}
			return actions;
		}
	});
};
