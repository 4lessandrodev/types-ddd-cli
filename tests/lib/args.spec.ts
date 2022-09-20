import { GetSchemaFromResource, ValidateInputs } from "@lib/args";
import GetAction from "@lib/args/get-action-arg";
import ExtractPropsFromArgs from "@lib/args/get-props-from-args";
import GetResource from "@lib/args/get-resource";
import IsHelpAction from "@lib/args/is-asking-for-help";
import IsVersionAction from "@lib/args/is-asking-for-version";
import IsValidAction from "@lib/args/is-valid-action";
import RemoveFilesArgs from "@lib/args/remove-node-args";

describe('args', () => {

	describe('is-valid-action', () => {
		it('should create to be a valid action', () => {
			const isValid = IsValidAction('create');
			expect(isValid).toBeTruthy();
		});

		it('should --help to be a valid action', () => {
			const isValid = IsValidAction('help');
			expect(isValid).toBeTruthy();
		});

		it('should vdo not to be a valid action', () => {
			const isValid = IsValidAction('vdo');
			expect(isValid).toBeFalsy();
		});

		it('should undefined not to be a valid action', () => {
			const isValid = IsValidAction(undefined as any);
			expect(isValid).toBeFalsy();
		});
	});

	describe('is-asking-for-help', () => {
		it('should to be asking for help', () => {
			const action = IsHelpAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', '--help']
			);
			expect(action).toBeTruthy();
		});

		it('should to be asking for help', () => {
			const action = IsHelpAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'help']
			);
			expect(action).toBeTruthy();
		});

		it('should to be asking for help', () => {
			const action = IsHelpAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create', 'help']
			);
			expect(action).toBeTruthy();
		});

		it('should not to be asking for help', () => {
			const action = IsHelpAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create']
			);
			expect(action).toBeFalsy();
		});

		it('should not to be asking for help', () => {
			const action = IsHelpAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create', 'dvo', 10 as any]
			);
			expect(action).toBeFalsy();
		});
	});

	describe('is-asking-for-version', () => {
		it('should to be asking for version', () => {
			const action = IsVersionAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', '--version']
			);
			expect(action).toBeTruthy();
		});

		it('should to be asking for version', () => {
			const action = IsVersionAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'version']
			);
			expect(action).toBeTruthy();
		});

		it('should to be asking for version', () => {
			const action = IsVersionAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create', 'version']
			);
			expect(action).toBeTruthy();
		});

		it('should not to be asking for version', () => {
			const action = IsVersionAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create']
			);
			expect(action).toBeFalsy();
		});

		it('should not to be asking for version', () => {
			const action = IsVersionAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create', 'dvo', 10 as any]
			);
			expect(action).toBeFalsy();
		});
	});

	describe('get-action', () => {
		it('should get help action with success', () => {
			const action = GetAction(['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', '--help']);
			expect(action).toBe('help');
		});

		it('should get create help action with success', () => {
			const action = GetAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create', '--help']
			);
			expect(action).toBe('help');
		});

		it('should get resource help action with success', () => {
			const action = GetAction(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'dvo', '--help']
			);
			expect(action).toBe('help');
		});

		it('should get create action with success', () => {
			const action = GetAction(['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create']);
			expect(action).toBe('create');
		});
	})

	describe('get-resource', () => {
		it('should get lambda resource with success', () => {
			const resource = GetResource(
				['create', 'lambda', '--name', 'my-object', '--value-type', 'string', '--path', '.']
			);

			expect(resource).toBe('lambda');
		});

		it('should get null if resource is not on index 1', () => {
			const resource = GetResource(
				['lambda', 'create', '--name', 'my-object', '--value-type', 'string', '--path', '.']
			);

			expect(resource).toBeNull();
		});

		it('should get null if args is not array', () => {
			const resource = GetResource({} as any);

			expect(resource).toBeNull();
		});

		it('should get null if args is array length equal 1', () => {
			const resource = GetResource(['--help']);

			expect(resource).toBeNull();
		});
	});

	describe('remove-node-args', () => {
		it('should remove first 2 args', () => {
			const action = RemoveFilesArgs(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', 'create']
			);
			expect(action).toEqual(['create']);
		});

		it('should return empty array', () => {
			const action = RemoveFilesArgs(
				['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts']
			);
			expect(action).toEqual([]);
		});
	});

	describe('get-props-from-args', () => {
		it('should get props with success', () => {
			const props = ExtractPropsFromArgs([]);
			expect(props).toEqual({ name: 'sample', destinationPath: '' });
		});

		it('should get props with success', () => {
			const props = ExtractPropsFromArgs(['--name', 'my-app', '--path', '.']);
			expect(props).toEqual({ name: 'my-app', destinationPath: '' });
		});

		it('should get props with success', () => {
			const props = ExtractPropsFromArgs(['--name', '--path', 'folder', '.']);
			expect(props).toEqual({ name: 'sample', destinationPath: 'folder' });
		});
	});

	describe('validate-inputs', () => {

		it('should return 0 with valid inputs', () => {
			const status = ValidateInputs(['create', 'rest-api', '--name', 'my-app']);
			expect(status).toBe(0);
		});

		it('should return 1 with invalid inputs', () => {
			const status = ValidateInputs(['ops', '--name', 'my-app']);
			expect(status).toBe(1);
		});

		it('should return 1 with invalid inputs', () => {
			const status = ValidateInputs(['test', 'rest-api', '--name', 'my-app']);
			expect(status).toBe(1);
		});

		it('should return 1 if provide an invalid name', () => {
			const status = ValidateInputs(['create', 'rest-api', '--name', '8app']);
			expect(status).toBe(1);
		});

		it('should return 1 if not provide a name', () => {
			const status = ValidateInputs(['create', 'rest-api', 'my-app']);
			expect(status).toBe(1);
		});

		it('should return 1 if not provide a name', () => {
			const status = ValidateInputs(['create', 'rest-api', '--name']);
			expect(status).toBe(1);
		});

		it('should return 1 if not provide a name', () => {
			const status = ValidateInputs(['create', 'invalid' as any, '--name', 'valid']);
			expect(status).toBe(1);
		});
	});

	describe('get-schema-for-resource', () => {
		it('should return a valid resource', () => {
			const schema = GetSchemaFromResource('ddd-aggregate');
			expect(schema).not.toBeNull();
		});

		it('should return null if provide an invalid resource', () => {
			const schema = GetSchemaFromResource('invalid' as any);
			expect(schema).toBeNull();
		});
	});

});
