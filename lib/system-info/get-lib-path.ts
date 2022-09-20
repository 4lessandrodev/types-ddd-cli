import { FnGetLibPath } from '@types';

/**
 * @description get lib path
 * @param process NodeProcess
 * @param require node require
 * @returns path as string or null
 */
export const GetLibPath: FnGetLibPath = (process: NodeJS.Process, require: NodeRequire): string | null => {

	const path = require.main?.path;

	if (path) return path;

	const alternativePath = process.mainModule?.path;

	if (alternativePath) return alternativePath;

	return null;
}

export default GetLibPath;
