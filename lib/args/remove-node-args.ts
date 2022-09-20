import { FnRemoveFilesArgs } from "@types";

/**
 * @description remove first 2 args from process
 * @param args process args
 * @returns only valid args
 */
export const RemoveFilesArgs: FnRemoveFilesArgs = (args: Array<string>): Array<string> => {
	const isArray = Array.isArray(args);
	const copyArgs = isArray ? [...args] : ['null', 'null'];
	const onlyArgs = copyArgs.splice(2);
	return onlyArgs;
}

export default RemoveFilesArgs;
