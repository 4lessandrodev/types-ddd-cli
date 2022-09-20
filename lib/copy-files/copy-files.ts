import CreateFolderIfNotExists from "@lib/create-folder-if-not-exists/create-folder";
import DefineLibPath from "@/define-lib-path";
import { CopyFileProps, FnCopyFiles } from "@types";
import { copyFileSync } from 'node:fs';
import { resolve } from "node:path";
import ReadDir from "./read-dir";

/**
 * @description copy files from cli folder to user path
 * @param props folderDestination, cliPath
 * @returns 0 if all is ok and 1 if some error
 */
export const CopyFiles: FnCopyFiles = (props: CopyFileProps): number => {
	const dir = ReadDir(props.folderOrigin);
	let destination = props.destinationPath;

	dir.forEach((file) => {
		const isFile = file.isFile();
		const origin = DefineLibPath([props.folderOrigin, file.name]);
		if (isFile) {
			const destine = resolve(destination, file.name);
			copyFileSync(origin, destine);
			return (0);
		}
		destination = resolve(destination, file.name);
		CreateFolderIfNotExists(destination);
		return CopyFiles({ destinationPath: destination, folderOrigin: origin });
	});
	return (0);
}

export default CopyFiles;
