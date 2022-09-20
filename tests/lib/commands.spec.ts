import ValidResources from "@actions/resources";
import Commands from "@commands/index";

describe('commands', () => {
	it('should has all keys action implemented', () => {
		const actions = Object.keys(Commands.create);
		expect(actions).toEqual(ValidResources);
	});
});
