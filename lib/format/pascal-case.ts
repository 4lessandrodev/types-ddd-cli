import { FnFormatCase } from "@types";

/**
 * @description transform a kebab case in PascalCase
 * @param kebabCase string as kebabCase
 * @returns string as PascalCase
 */
export const FormatToPascalCase: FnFormatCase = (kebabCase: string): string => {

	let symIndex = kebabCase.indexOf('-');

	if (symIndex === -1) {
		const firstLetter = kebabCase[0].toUpperCase();
		return firstLetter + kebabCase.slice(1);
	}

	return FormatToPascalCase(kebabCase.slice(0, symIndex) +
		kebabCase.slice(symIndex + 1, symIndex + 2).toUpperCase() +
		kebabCase.slice(symIndex + 2));
}

export default FormatToPascalCase;
