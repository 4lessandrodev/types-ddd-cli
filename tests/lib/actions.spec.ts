import ValidActions from "@actions/actions";
import ValidResources from "@actions/resources";

describe('actions', () => {
	it('should has valid actions', () => {
		const actions = ValidActions;
		expect(actions).toEqual(['create','help','version']);
	});

	it('should has all valid resources', () => {
		const resources = ValidResources;
		expect(resources).toEqual([
			'rest-api',
			'lambda',
			'command', 'cmd',
			'ddd-adapter', 'dad',
			'ddd-aggregate', 'dag',
			'ddd-entity', 'den',
			'ddd-event', 'evt',
			'ddd-model', 'dmd',
			'ddd-module', 'dmo',
			'ddd-repository', 'dre',
			'ddd-value-object', 'dvo',
			'use-case', 'usc',
			'web-component', 'wbc',
			'microservice', 'mcs',
			'ms-client', 'msc',
			'web-app', 'wap'
		]);
	});
});
