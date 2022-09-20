import { Dirent, FnReadDir } from "@types";
import { readdirSync, existsSync } from "node:fs";

/**
 * @description read files from a path
 * @param path as string
 * @returns Array of Dirent or an empty Array
 */
export const ReadDir: FnReadDir = (path: string): Array<Dirent> => {
	const exists = existsSync(path);
	if (!exists) return [];
	return readdirSync(path, { encoding: 'utf8', withFileTypes: true });
}

export default ReadDir;
