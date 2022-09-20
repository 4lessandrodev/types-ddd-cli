import { FnChangeFileExtension } from "@types";

/**
 * @description apply a file name to path
 * @param originalPath path to file
 * @param newName the file name to be applied
 * @returns full path with file renamed
 */
export const ChangeExtension: FnChangeFileExtension = (originalPath: string, newName: string): string => {
	const match = RegExp('__TEMPLATE__FILE__NAME__', 'g');
	const renamedPathFile = originalPath.replace(match, newName);
	const TSformats = /\.ts\.hbs$|\.ts\.html$|\.ts\.txt$/g;

	const isTS = TSformats.test(renamedPathFile);

	if (isTS) {
		const resultPath = renamedPathFile.replace(TSformats, '.ts');
		return resultPath;
	}

	const TSXformats = /\.tsx\.hbs$|\.tsx\.html$|\.tsx\.txt$/g;
	const resultPath = renamedPathFile.replace(TSXformats, '.tsx');
	return resultPath;
}

export default ChangeExtension;
