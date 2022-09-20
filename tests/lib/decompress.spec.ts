import { ReadDir } from "@lib/copy-files";
import { CreateFolderIfNotExists } from "@lib/create-folder-if-not-exists";
import ExtractFile from "@lib/unzip-gz-file/decompress";
import { rmSync } from "node:fs";
import { resolve } from "node:path";

describe('unzip-gz-file', () => {
	
	describe('decompress', () => {

		it('should decompress zip file with success', async () => {
			const origin = resolve('tests', 'lib', 'main.tar');
			const destine = resolve('tests', 'lib', 'main-zip');
			CreateFolderIfNotExists(destine);

			const zip = await ExtractFile({
				destinationPath: destine,
				zipTarFilePath: origin
			});

			expect(zip).toBe(0);
			const files = ReadDir(destine);
			expect(files).toHaveLength(5);
			rmSync(destine, { recursive: true });	
		});
	});
});
