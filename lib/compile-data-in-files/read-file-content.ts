import { readFileSync } from 'node:fs';

/**
 * @description read file from a path
 * @param path string
 * @returns string
 */
export const ReadFileContent = (path: string) :string=> {
	const buffer = readFileSync(path, 'utf8');
	return buffer;
}

export default ReadFileContent;
