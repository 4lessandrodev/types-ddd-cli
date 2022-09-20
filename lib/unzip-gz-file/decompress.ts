import { ExtractProps, FnExtractFile } from "@types";
import { gear } from "@ui/icons";
import { PrintInfo } from "@ui/print";
import { createReadStream } from "node:fs";
import tar from "tar";

/**
 * @description extract files from tar to local templates folder
 * @param props folderOrigin, tarName
 * @return 0 if all ok
 */
export const ExtractFile: FnExtractFile = async (props: ExtractProps): Promise<number> => {
	return new Promise((ok, fail) => {
		PrintInfo(gear, ' extracting files', 'decompressing ...');
		const origin = props.zipTarFilePath;
		const destine = props.destinationPath;

		const read = createReadStream(origin).pipe(
			tar.x({
				strip: 1,
				C: destine,
				unlink: false,
				filter: (path: string) => {
					return !path.includes('.git') && !path.includes('.gitignore');
				}
			})
		)
		read.on('finish', () => { ok(0); return (0); });
		read.on('error', (err) => { fail(err); return (1) });
		return (0);
	});
}

export default ExtractFile;
