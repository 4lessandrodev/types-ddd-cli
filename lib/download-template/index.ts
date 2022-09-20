import { DownloadTemplateProps, FnDownloadTemplate } from '@types';
import { rmSync } from 'node:fs';
import { get } from 'node:https';
import { createWriteStream } from 'node:fs';
import { URL } from 'node:url';
import { PrintError, PrintInfo } from '@ui/print';
import { hourGlass } from '@ui/icons';
import DefineLibPath from '@/define-lib-path';
import { ExistsFile } from '@lib/copy-files';
import { CreateFolderIfNotExists } from '@lib/create-folder-if-not-exists';

/**
 * @description ensure create download folder and delete old tar file
 * @param path tar path
 */
const EnsureFolderAndNewFile = (path: string) => {
	const downloadFolderPath = DefineLibPath(['downloads']);
	CreateFolderIfNotExists(downloadFolderPath);
	const exists = ExistsFile(path);
	if(exists) rmSync(path, { recursive: true, force: true });
}

/**
 * @description download template from github
 * @param props resource
 * @returns void
 */
export const DownloadTemplate: FnDownloadTemplate = async (props: DownloadTemplateProps): Promise<number> => {

	//'https://codeload.github.com/4lessandrodev/form-example/legacy.tar.gz/refs/heads/main'
	return new Promise((ok, fail) => {
		const url = new URL(props.templateUrl);
		const request = get(url);

		// delete old file and create download folder
		EnsureFolderAndNewFile(props.tarPath);

		request.on('response', (response) => {

			PrintInfo(hourGlass, 'downloading template', 'fetching ...');

			const out = createWriteStream(props.tarPath);

			const status = response.statusCode;
			const message = response.statusMessage;

			if (!status || status !== 200) {
				PrintError('Error on download template', message ?? 'connection refused');
				fail(message);
				process.exitCode = 1;
			}
		
			const onError = (error: any) => {
				if (error) {
					PrintError('Unexpected error', error.message);
					fail(message);
					process.exitCode = 1;
				}
			};

			response.on('error', onError);

			response.pipe(out);
			response.on('end', () => {
				ok(0);
			});
		});
	});
}

export default DownloadTemplate;
