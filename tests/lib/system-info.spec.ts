import { GetArgs } from '@lib/args';
import { GetCommandPath, GetLibPath, GetSystem } from '@lib/system-info';
import DefineLibPath from '@/define-lib-path';

describe('path', () => {

	const mockModule: Partial<NodeJS.Module> = {
		path: '/home/apps/my-cli/bin',
	};

	const mockProcess: Partial<NodeJS.Process> = {
		platform: 'linux',
		cwd: () => '/home/apps/my-cli',
		mainModule: mockModule as NodeJS.Module,
		argv: ['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', '--help']
	}

	describe('get-command-path', () => {

		it('should get my execution test path', () => {
			const path = GetCommandPath(mockProcess as NodeJS.Process);
			expect(path).toBe('/home/apps/my-cli');
		});

		it('should return null if cwd is not a function', () => {
			const path = GetCommandPath({ ...mockProcess, cwd: undefined } as unknown as NodeJS.Process);
			expect(path).toBeNull();
		});

		it('should return null if cwd do not get path', () => {
			const path = GetCommandPath({
				...mockProcess, cwd: () => undefined
			} as unknown as NodeJS.Process);
			expect(path).toBeNull();
		});
	});

	describe('get-lib-path', () => {

		it('should get lib path with success', () => {
			const path = GetLibPath(mockProcess as NodeJS.Process, {} as NodeRequire);
			expect(path).toBe('/home/apps/my-cli/bin');
		});

		it('should get main from require if mainModule is not available', () => {
			delete mockModule.path;
			const path = GetLibPath(mockProcess as NodeJS.Process, require);
			expect(path).toBeDefined();
		});

		it('should get null from require if path is not available', () => {
			delete mockModule.path;
			const path = GetLibPath(mockProcess as NodeJS.Process, {} as NodeRequire);
			expect(path).toBeNull();
		});
	});

	describe('get-system', () => {

		it('should get system linux with success', () => {
			const system = GetSystem(mockProcess as NodeJS.Process);
			expect(system).toBe('linux');
		});

		it('should get system windows with success', () => {
			const system = GetSystem({ ...mockProcess, platform: 'win32' } as NodeJS.Process);
			expect(system).toBe('win32');
		});
	});

	describe('get-args', () => {
		const args = GetArgs(mockProcess as NodeJS.Process);
		expect(args).toEqual(['/home/user/.nvm/versions/node/v16.14.0/bin/node', 'bin/ddd.ts', '--help'])
	});

	it('should define path based on lib folder', () => {
		const path = DefineLibPath(['folder', 'subfolder']);
		expect(path.includes('/home')).toBeTruthy();
	});
});
