import WriteFileContent from "@lib/compile-data-in-files/save-data-content";
import { Cache, FnCreateDefaultCacheFile, RequestCache } from "@types";
import ExistsFile from "@lib/copy-files/exists-file";
import Schema from "@lib/schema";
import DefineLibPath from "@/define-lib-path";

export const cacheFilePath = DefineLibPath(['lib', 'cache', 'cache.json']);

export const GetCacheFilePath = (): string => {
	return cacheFilePath;
}

/**
 * @description create default cache file
 * @returns 1 if file exists or 0 if created with success
 */
export const CreateDefaultIfNotExistsCacheFile: FnCreateDefaultCacheFile = (): number => {
	const path = GetCacheFilePath();

	const existsFile = ExistsFile(path);

	if (existsFile) return (1);

	const requests = Schema.map(
		(schema): RequestCache => ({
			lastRequest: 0,
			fileTarName: schema.fileTarName
		})
	);

	const file: Cache = {
		requests,
		createdAt: new Date(),
		updatedAt: new Date()
	}

	return WriteFileContent(path, JSON.stringify(file));
}

export default CreateDefaultIfNotExistsCacheFile;
