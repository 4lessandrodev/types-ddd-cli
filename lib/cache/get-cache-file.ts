import { Cache, FnGetCacheFile } from "@types";
import { readFileSync } from "node:fs";
import CreateDefault from "./create-default-cache-file";
import { GetCacheFilePath } from "./create-default-cache-file";


/**
 * @description get cache
 * @returns Cache
 */
export const GetCacheFile: FnGetCacheFile = (): Cache => {
	CreateDefault();
	const path = GetCacheFilePath();
	
	const content = readFileSync(path, { encoding: 'utf-8' });
	const json: Cache = JSON.parse(content);

	return json;
}

export default GetCacheFile;
