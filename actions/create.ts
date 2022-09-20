import IsCacheExpired from "@lib/cache/is-cache-expired";
import UpdateCacheExpiration from "@lib/cache/update-cache-expiration";
import CreateFolderIfNotExists from "@lib/create-folder-if-not-exists/create-folder";
import DownloadTemplate from "@lib/download-template";
import DefineLibPath from "@/define-lib-path";
import ExtractFile from "@lib/unzip-gz-file/decompress";
import { Args, FnBaseCreate } from "@types";
import { folder } from "@ui/icons";
import { PrintInfo } from "@ui/print";

/**
 * @description get template from github if cache is expired
 * @param props path, templateFolder, fileName, targetName
 * @returns 0 if all gone well and 1 if error
 */
export const GenerateFilesFromGithub: FnBaseCreate = async (props: Args): Promise<number> => {
	const destinationPath = DefineLibPath([props.destinationPath, props.name]);
	const tarPath = DefineLibPath(['downloads', props.fileTarName]);

	// create folders if not exists
	CreateFolderIfNotExists(tarPath);
	CreateFolderIfNotExists(destinationPath);

	const isExpiredCache = IsCacheExpired({ ...props  });

	// download github template as gz
	if (isExpiredCache) {
		await DownloadTemplate({ ...props, tarPath });
		
		UpdateCacheExpiration({ ...props });		
	};

	// unzip file to user folder
	await ExtractFile({ zipTarFilePath:tarPath, destinationPath  });

	// copy files to user path
	PrintInfo(folder, 'copying files', `to path: ${destinationPath}`);

	return (0);
};

export default GenerateFilesFromGithub;
