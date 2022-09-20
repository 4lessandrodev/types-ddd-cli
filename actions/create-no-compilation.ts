import { Args, FnCommand } from "@types";
import { PrintSuccessMessage } from "@ui/print";
import GenerateFilesFromGithub from "./create";

export const CreateDefaultNoCompile: FnCommand = async (args: Args): Promise<number> => {
	const templateFolderName = args.templateFolderName;

	const isFail = await GenerateFilesFromGithub(args);

	if (isFail) return (1);
	
	PrintSuccessMessage(templateFolderName, 'created with success!!! Good hacking...\n');
	return (0);
}

export const NotImplemented = async (args: Args) => {
	console.log({ action: 'Method not implemented', args });
	return (0);
}

export default CreateDefaultNoCompile;
