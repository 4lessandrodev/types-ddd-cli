import ChangeExtension from "@lib/compile-data-in-files/change-file-extension";

describe('change-file-extension', () => {
	it('should rename file with success', () => {
		const path = '/home/user/projects/my-project/template/__TEMPLATE__FILE__NAME__.ts.hbs';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('/home/user/projects/my-project/template/value-object.ts')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.ts.hbs';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.ts')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.ts.html';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.ts')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.ts.txt';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.ts')
	});

	it('should rename file with success', () => {
		const path = '/home/user/projects/my-project/template/__TEMPLATE__FILE__NAME__.tsx.hbs';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('/home/user/projects/my-project/template/value-object.tsx')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.tsx.hbs';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.tsx')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.tsx.html';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.tsx')
	});

	it('should rename file with success', () => {
		const path = 'c:\\home\\user\\projects\\my-project\\template\\__TEMPLATE__FILE__NAME__.tsx.txt';
		const renamed = ChangeExtension(path, 'value-object');
		expect(renamed).toBe('c:\\home\\user\\projects\\my-project\\template\\value-object.tsx')
	});
});
