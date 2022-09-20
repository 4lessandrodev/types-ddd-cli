import FormatToKebabCase from "@lib/format/kebab-case";
import FormatToPascalCase from "@lib/format/pascal-case";

describe('format', () => {
	describe('pascal-case', () => {

		it('should return hello', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('hello'));
			expect(formatted).toBe('Hello');
		});

		it('should return HelloWorld', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('helloWorld'));
			expect(formatted).toBe('HelloWorld');
		});

		it('should return HelloWorld', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('hello-world'));
			expect(formatted).toBe('HelloWorld');
		});

		it('should return HelloWorld', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('HelloMyFriend@'));
			expect(formatted).toBe('HelloMyFriend');
		});

		it('should return HelloWorld', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('hello_world'));
			expect(formatted).toBe('HelloWorld');
		});

		it('should return HelloWorld', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('hello_my_friend'));
			expect(formatted).toBe('HelloMyFriend');
		});

		it('should return IxiEsseECompLiCaDTed', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('ixiEsse_E-compLiCa-d_ted'));
			expect(formatted).toBe('IxiEsseECompLiCaDTed');
		});

		it('should return Sample', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase({} as any));
			expect(formatted).toBe('Sample');
		});

		it('should return Sample', () => {
			const formatted = FormatToPascalCase(FormatToKebabCase('a'));
			expect(formatted).toBe('Sample');
		});
	});

	describe('kebab-case', () => {

		it('should return sample', () => {
			const formatted = FormatToKebabCase('a');
			expect(formatted).toBe('sample');
		});

		it('should return sample', () => {
			const formatted = FormatToKebabCase('HELLO');
			expect(formatted).toBe('h-e-l-l-o');
		});

		it('should return sample', () => {
			const formatted = FormatToKebabCase({} as any);
			expect(formatted).toBe('sample');
		});

		it('should return hello', () => {
			const formatted = FormatToKebabCase('hello');
			expect(formatted).toBe('hello');
		});

		it('should return hello-world', () => {
			const formatted = FormatToKebabCase('helloWorld');
			expect(formatted).toBe('hello-world');
		});

		it('should return hello-world', () => {
			const formatted = FormatToKebabCase('HelloWorld');
			expect(formatted).toBe('hello-world');
		});

		it('should return hello-my-friend', () => {
			const formatted = FormatToKebabCase('HelloMyFriend');
			expect(formatted).toBe('hello-my-friend');
		});

		it('should return hello-world', () => {
			const formatted = FormatToKebabCase('hello_world');
			expect(formatted).toBe('hello-world');
		});

		it('should return hello-my-friend', () => {
			const formatted = FormatToKebabCase('hello_my_friend');
			expect(formatted).toBe('hello-my-friend');
		});

		it('should return hello-my-friend', () => {
			const formatted = FormatToKebabCase('_hello_my_friend-');
			expect(formatted).toBe('hello-my-friend');
		});

		it('should return ixi-esse-e-comp-li-ca-d-ted', () => {
			const formatted = FormatToKebabCase('ixiEsse_E-compLiCa-d_ted');
			expect(formatted).toBe('ixi-esse-e-comp-li-ca-d-ted');
		});
	});
});
