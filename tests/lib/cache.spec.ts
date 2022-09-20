import { GetSchemaFromResource } from "@lib/args";
import {
	CreateDefaultIfNotExistsCacheFile,
	GetCacheFile,
	GetCacheFilePath,
	IsCacheExpired,
	UpdateCacheExpiration
} from "@lib/cache";
import RenameFile from "@lib/compile-data-in-files/rename-file";
import { ExistsFile } from "@lib/copy-files";
import Schema from "@lib/schema";
import { unlinkSync } from "fs";
import { resolve } from "path";

describe('cache', () => {
	describe('get-cache-file', () => {
		it('should get cache file with success', () => {
			const file = GetCacheFile();
			expect(file.createdAt).toBeDefined();
			expect(file.updatedAt).toBeDefined();
			expect(file.requests).toBeDefined();
		});
	});

	describe('is-cache-expired', () => {
		it('should provide true if is expired and false if not', () => {
			const schema = Schema[0];
			const isExpired = IsCacheExpired(schema);
			expect(typeof isExpired === 'boolean').toBeTruthy();
		});

		it('should return true if provide an invalid resource', () => {
			const schema = Schema[0];
			const isExpired = IsCacheExpired({ ...schema, fileTarName: 'invalid' });
			expect(isExpired).toBeTruthy();
		});
	});

	describe('create-default-cache-file', () => {
		const path = GetCacheFilePath();
		beforeAll(() => {
			RenameFile(path, resolve('lib', 'cache', 'cache.before.json'));
		});

		afterAll(() => {
			unlinkSync(path);
			RenameFile(resolve('lib', 'cache', 'cache.before.json'), path);
		});

		it('should create a default cache file', () => {
			const exists = ExistsFile(path);
			expect(exists).toBeFalsy()
			CreateDefaultIfNotExistsCacheFile();
			const created = ExistsFile(path);
			expect(created).toBeTruthy()
		});
	});

	describe('update-cache-expiration', () => {
		it('should do nothing if provide a non existing resource', () => {
			const updated = UpdateCacheExpiration({
				fileTarName: 'invalid',
				resource: 'invalid' as any,
				templateUrl: 'invalid'
			});

			expect(updated).toBe(1);
		});

		it('should update cache with success', () => {
			
			const schema = GetSchemaFromResource('rest-api');
			const cacheBefore = GetCacheFile();

			const cache1 = cacheBefore.requests.find((c) => {
				return c.fileTarName === schema?.fileTarName
			});

			const updated = UpdateCacheExpiration({
				fileTarName: schema?.fileTarName as any,
				resource: schema?.resourceName as any,
				templateUrl: schema?.templateUrl as any
			});

			expect(updated).toBe(0);
			const cacheAfter = GetCacheFile();

			const cache2 = cacheAfter.requests.find((c) => {
				return c.fileTarName === schema?.fileTarName
			});

			expect(cache2!.lastRequest).toBeGreaterThan(cache1!.lastRequest);
		});
	})
});
