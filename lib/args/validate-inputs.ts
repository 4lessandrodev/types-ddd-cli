import ValidActions from "@actions/actions";
import ValidResources from "@actions/resources";
import { Action, FnValidateInputs, Resource } from "@types";
import { PrintError } from "@ui/print";

/**
 * @description validate each args
 * @param args valid args
 * @returns 0 if all ok else has some invalid input returns 1
 */
export const ValidateInputs: FnValidateInputs = (args: Array<string>): number => {

	const action = args[0];
	const isValidAction = ValidActions.includes(action as Action);

	if (!isValidAction) {
		PrintError("first arg", `must be a valid option: ${ValidActions.toString()}`);
		return (1);
	}

	const nameIndex = args.findIndex((arg) => arg === '--name');
	if (nameIndex === -1) {
		PrintError("--name", 'arg is required');
		return (1);
	}

	
	const resourceName = args[nameIndex + 1];
	if (typeof resourceName !== 'string') {
		PrintError("--name", 'value arg is required');
		return (1);
	}
	
	const firstLetterAsciiCode = resourceName.charCodeAt(0);
	
	if (
		!(firstLetterAsciiCode >= 65 && firstLetterAsciiCode <= 90) &&
		!(firstLetterAsciiCode >= 97 && firstLetterAsciiCode <= 122)
	) {
		PrintError(resourceName, 'is an invalid name');
		return (1);
	}
	
	const resource = args[1];
	const isValidResource = ValidResources.includes(resource as Resource);
	
	if (!isValidResource) {
		PrintError(resource, `is not a valid option. see --help`);
		return (1);
	}

	return (0);
}

export default ValidateInputs;
