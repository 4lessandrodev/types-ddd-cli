import Compile from "@lib/compile-data-in-files/compile";
import FormatToKebabCase from "@lib/format/kebab-case";
import FormatToPascalCase from "@lib/format/pascal-case";
import { Args, FnCommand } from "@types";
import { PrintError, PrintSuccessMessage } from "@ui/print";
import GenerateFilesFromGithub from "./create";

export const CreateAndCompileDefault: FnCommand = async (args: Args): Promise<number> => {
	const templateFolderName = args.templateFolderName;

	const isFail = await GenerateFilesFromGithub(args);

	if (isFail) return (1);

	const fileName = FormatToKebabCase(args.name);
	const className = FormatToPascalCase(fileName);

	// compile data and apply to files
	const isFailCompile = await Compile({
		...args,
		data: [
			{ '{{__TEMPLATE__CLASS__NAME__}}': className },
			{ '__TEMPLATE__FILE__NAME__': fileName }
		]
	});
	
	if (isFailCompile) {
		PrintError('compilation', 'error on compile data to template');
		return (1);
	}

	PrintSuccessMessage(templateFolderName, 'created with success!!! Good hacking...\n');
	return (0);
}

export default CreateAndCompileDefault;
