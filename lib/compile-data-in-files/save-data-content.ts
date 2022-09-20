import { FnWriteFileContent } from '@types';
import { writeFileSync } from 'node:fs';

/**
 * @description write or replace content on a file
 * @param path string
 * @param data string content to apply
 * @returns 0 if write file with success and 1 if some error
 */
export const WriteFileContent: FnWriteFileContent = (path: string, data: string): number => {
	writeFileSync(path, data, 'utf8');
	return (0);
}

export default WriteFileContent;
