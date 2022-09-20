import { Cache, FnIsCacheExpired, TemplateSchema } from "@types";
import GetCacheFile from "./get-cache-file";

/**
 * @description cache expires in 3 days
 * @param props templateUrl and fileName
 * @returns true if cache is expired and false if not
 */
export const IsCacheExpired: FnIsCacheExpired = (props: TemplateSchema): boolean => {
	const now = Date.now();
	const expired = true;
	const json: Cache = GetCacheFile();
	const cache = json.requests.find(
		(_cache) => props.fileTarName === _cache.fileTarName
	);

	if (!cache) return expired;

	const expirationInMS = props.cacheExpiresSec * 1000;
	const isExpired = (now - cache.lastRequest) > expirationInMS;

	return isExpired;
}

export default IsCacheExpired;
