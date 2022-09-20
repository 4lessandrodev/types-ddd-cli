import { FnDefineLibPath } from "@types";
import { resolve } from "node:path"

export const DefineLibPath: FnDefineLibPath = (path?: string[]): string => {
	const hasPath = Array.isArray(path);
	if(hasPath && path.length > 0) return resolve(__dirname, ...path);
	return resolve(__dirname);
}

export default DefineLibPath;
