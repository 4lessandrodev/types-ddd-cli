import { FnIsValidChar } from "@types";

export const IsLowerChar: FnIsValidChar = (char: string): boolean => {
	const charCode = char.charCodeAt(0);
	return charCode < 91 && charCode > 64;
}

export default IsLowerChar;
