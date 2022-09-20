import { FnGetArgs } from "@types";

/**
 * @description get terminal args
 * @param process typed NodeJS.Process
 * @returns typed args
 */
export const GetArgs: FnGetArgs = (process: NodeJS.Process): Array<string> => {
	return process.argv;
}
