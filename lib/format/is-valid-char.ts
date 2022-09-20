import { FnIsValidChar } from "@types";

export const IsValidKebabChar: FnIsValidChar = (char: string): boolean => {
	const charCode = char.charCodeAt(0);
	// 122 = z && 97 = a || 45 = -
	return charCode < 123 && charCode > 96 || charCode === 45;
}

export default FnIsValidChar;
