import RenameFile from "@lib/compile-data-in-files/rename-file";
import WriteFileContent from "@lib/compile-data-in-files/save-data-content";
import { CopyFiles, ExistsFile, ReadDir } from "@lib/copy-files";
import CreateFolderIfNotExists from "@lib/create-folder-if-not-exists/create-folder";
import { rmSync, unlinkSync } from "fs";
import { resolve } from "path";

describe('copy-files', () => {

	describe('rename-file', () => {

		const deletePath = resolve('fails.txt');
		const createdPath = resolve('created.txt');

		beforeAll(() => {
			WriteFileContent(createdPath, 'echo');
		});

		afterAll(() => {
			unlinkSync(deletePath);
		});

		it('should rename file with success', () => {
			
			const existsCreated = ExistsFile(createdPath);
			expect(existsCreated).toBeTruthy();
			
			RenameFile(createdPath, deletePath);

			const existsRename = ExistsFile(deletePath);
			expect(existsRename).toBeTruthy();
		});
	});

	describe('exists-file', () => {

		it('should exists package.json', () => {
			const exists = ExistsFile(resolve('package.json'));
			expect(exists).toBeTruthy();
		});

		it('should not exists an temp file called fails.txt', () => {
			const exists = ExistsFile(resolve('fails.txt'));
			expect(exists).toBeFalsy();
		});
	});

	describe('create-folder-if-not-exists', () => {

		const folders = resolve('folder', 'subfolder');

		afterAll(() => {
			rmSync(resolve('folder'), { recursive: true, force: true });
		});

		it('should create a folder with success', () => {
			const dir = ReadDir(folders);
			expect(dir).toEqual([]);
			CreateFolderIfNotExists(folders);

			WriteFileContent(resolve(folders, 'content.txt'), 'echo');
			const dirs = ReadDir(folders);

			expect(dirs[0].name).toEqual('content.txt');
		});
	});

	describe('copy-files', () => {

		const mainFolder = resolve('main-test-folder');
		const subFolder = resolve(mainFolder, 'subfolder');
		const mainFile = resolve(mainFolder, 'file.txt');
		const subFile = resolve(subFolder, 'text.txt');
		const destination = resolve('destination-test');

		beforeAll(() => {
			CreateFolderIfNotExists(destination);
			CreateFolderIfNotExists(subFolder);
			CreateFolderIfNotExists(mainFolder);
			WriteFileContent(mainFile, 'echo');
			WriteFileContent(subFile, 'echo');
		});

		afterAll(() => {
			rmSync(mainFolder, { force: true, recursive: true });
			rmSync(destination, { force: true, recursive: true });
		 });

		it('should copy many files and folder from a path to other', () => {
			CopyFiles({ folderOrigin: mainFolder, destinationPath: destination });
			const files = ReadDir(destination);
			expect(files).toHaveLength(2);
		});
	});
});
