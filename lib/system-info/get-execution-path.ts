import { FnGetCommandPath } from '@types';

/**
 * @description get process path
 * @param process Node Process
 * @returns path as string or null
 */
export const GetCommandPath: FnGetCommandPath = (process: NodeJS.Process): string | null => {

	const hasCwdCommand = typeof process.cwd === 'function';

	if (!hasCwdCommand) return null;

	const path = process.cwd();

	if (path) return path;

	return null;
}

export default GetCommandPath;
