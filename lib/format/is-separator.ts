import { FnIsValidChar } from "@types";

export const IsSeparatorChar: FnIsValidChar = (char: string): boolean => {
	return char === '-' || char === '_';
}

export default IsSeparatorChar;
