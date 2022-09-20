import GetSchemaFromResource from "@lib/args/get-schema-for-resource";
import WriteFileContent from "@lib/compile-data-in-files/save-data-content";
import { CacheExpiredProps, FnUpdateCacheExpiration } from "@types";
import { GetCacheFilePath } from "./create-default-cache-file";
import GetCacheFile from "./get-cache-file";

/**
 * @description update cache if a new download happens
 * @param props fileTarName, fileName, TemplateUrl
 * @returns 1 if schema is not found and 0 if write content with success
 */
export const UpdateCacheExpiration: FnUpdateCacheExpiration = (props: CacheExpiredProps): number => {
	const caches = GetCacheFile();
	const schema = GetSchemaFromResource(props.resource);
	const cachePath = GetCacheFilePath();

	if (!schema) return (1);

	caches.updatedAt = new Date();

	const findIndex = caches.requests.findIndex(
		(req) => props.fileTarName === req.fileTarName
	);

	const exists = findIndex !== -1;
	if (exists) caches.requests.splice(findIndex, 1);

	caches.requests.push({
		fileTarName: schema.fileTarName,
		lastRequest: Date.now()
	});

	return WriteFileContent(cachePath, JSON.stringify(caches));
}

export default UpdateCacheExpiration;
