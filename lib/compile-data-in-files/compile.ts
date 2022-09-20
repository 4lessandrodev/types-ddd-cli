import { ReadDir } from "@lib/copy-files";
import ReadFileContent from "./read-file-content";
import { CompileArgs, Dirent, FnApplyData, FnCompile } from "@types";
import { resolve } from "node:path";
import WriteFileContent from "./save-data-content";
import RenameFile from "./rename-file";
import ChangeExtension from "./change-file-extension";

/**
 * @description apply data to a file
 * @param file Dirent file
 * @param args as CompileArgs
 * @returns 1 if some conflict occurs and 0 if all ok
 */
export const ApplyData: FnApplyData = async (
	file: Dirent, { data, destinationPath, ...arg }: CompileArgs
): Promise<number> => {
	return new Promise((ok, fail) => {

		const fileName = file.name;
		const folder = arg.name;
		const targetFolderPath = resolve(destinationPath, folder, fileName);

		if (fileName === '.git') return ok(0);

		if (file.isDirectory()) {
			return Compile({ data, ...arg, destinationPath: targetFolderPath, name: '' });
		}

		const isTemplate = fileName.includes('__TEMPLATE__FILE__NAME__');

		if (!isTemplate) {
			return ok(0);
		}
	
		const buffer = ReadFileContent(targetFolderPath);
		const content = buffer.toString();

		data.forEach((prop) => {
			const key = Object.keys(prop)[0];
			const value = Object.values(prop)[0];
			if (typeof key !== 'string' || typeof value !== 'string') {
				return fail('invalid args');
			}
			const hasPropsToReplace = content.includes(key);
			if (hasPropsToReplace) {
				const result = content.replace(RegExp(key, 'gm'), value);
				WriteFileContent(targetFolderPath, result);
			}
			if (key === '__TEMPLATE__FILE__NAME__') {
				const resultPath = ChangeExtension(targetFolderPath, value);
				RenameFile(targetFolderPath, resultPath);
			 }
		});
		return ok(0);
	});
}

/**
 * @description compile data to files
 * @param args CompileArgs
 * @returns void
 */
export const Compile: FnCompile = async (
	{ data, name, ...arg }: CompileArgs
): Promise<number> => {
	return new Promise((ok) => {
		const path = resolve(arg.destinationPath, name);
		const isArray = Array.isArray(data);
		const hasProps = isArray && data.length > 0;
		const files = ReadDir(path);
		const existsFiles = files.length > 0;

		if (!hasProps || !existsFiles) {
			return ok(0);
		}
		files.forEach(
			async (file) => await ApplyData(
				file, { data, name, ...arg }
			)
		);

		return ok(0);
	});
}

export default Compile;
