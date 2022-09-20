import { FnRenameFile } from '@types';
import { renameSync } from 'node:fs';

/**
 * @description rename a file
 * @param oldPath string
 * @param newPath string
 * @returns 0 if all ok and 1 if some error
 */
export const RenameFile: FnRenameFile = (oldPath: string, newPath: string): number => {
	renameSync(oldPath, newPath);
	return (0);
}

export default RenameFile;
