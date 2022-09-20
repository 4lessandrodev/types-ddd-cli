import { FnExtractPropsFromArgs, MinArgs } from "@types";

/**
 * @description get valid args typed
 * @param args args typed on terminal
 * @returns valid typed args
 */
export const ExtractPropsFromArgs: FnExtractPropsFromArgs = (args: Array<string>): MinArgs => {
	const defaultArgs: MinArgs = {
		name: 'sample',
		destinationPath: ''
	};
	
	const isArray = Array.isArray(args);

	if (!isArray) return defaultArgs;

	const nameIndex = args.findIndex((arg) => arg.toLowerCase() === '--name');
	if (nameIndex !== -1) {
		const name = args[nameIndex + 1];
		if(typeof name === 'string' && !name.includes('--')) defaultArgs.name = name;
	}

	const pathIndex = args.findIndex((arg) => arg.toLowerCase() === '--path');
	if (pathIndex !== -1) {
		const path = args[pathIndex + 1];
		if (typeof path === 'string' && path !== '.' && !path.includes('--')) defaultArgs.destinationPath = path;
	}

	return defaultArgs;
}

export default ExtractPropsFromArgs;
