import { FnExistsFile } from "@types"
import { existsSync } from "node:fs";
import { resolve } from "node:path";

/**
 * @description check if a file or a folder exists
 * @param path string
 * @returns true if exists and false if not
 */
export const ExistsFile: FnExistsFile = (path: string): boolean => {
	const dir = resolve(path);
	return existsSync(dir);
}

export default ExistsFile;
