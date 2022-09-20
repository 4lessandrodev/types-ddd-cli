import Compile from "@lib/compile-data-in-files/compile";
import FormatToKebabCase from "@lib/format/kebab-case";
import FormatToPascalCase from "@lib/format/pascal-case";
import { Args, FnCommand } from "@types";
import { PrintError, PrintSuccessMessage } from "@ui/print";
import GenerateFilesFromGithub from "./create";

export const CreateReactAndCompileDefault: FnCommand = async (args: Args): Promise<number> => {

	const fileName = FormatToKebabCase(args.name);
	const className = FormatToPascalCase(fileName);
	args.name = className;

	const isFail = await GenerateFilesFromGithub(args);

	if (isFail) return (1);

	// compile data and apply to files
	const isFailCompile = await Compile({
		...args,
		data: [
			{ '{{__TEMPLATE__CLASS__NAME__}}': className },
			{ '__TEMPLATE__FILE__NAME__': className }
		]
	});

	if (isFailCompile) {
		PrintError('compilation', 'error on compile data to template');
		return (1);
	}

	PrintSuccessMessage(className, 'created with success!!! Good hacking...\n');
	return (0);
}

export default CreateReactAndCompileDefault;
