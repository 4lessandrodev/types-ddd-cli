/** @todo define value object name from cli */
import MyValueObject from "./value-object"

/** @todo define value object name from cli */
describe('my-value-object', () => {
	it('should create a valid value object', () => {

		/** @todo define value object name from cli */
		const myValueObject = MyValueObject.create('some value');

		expect(myValueObject.isSuccess).toBeTruly();
		expect(myValueObject.getResult()).toBeDefined();
		expect(myValueObject.getResult().value).toBe('some value');
	});
});
