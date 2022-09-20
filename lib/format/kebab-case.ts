import { FnFormatCase } from "@types";
import { IsUpperChar } from "./is-upper-case";
import { IsValidKebabChar } from "./is-valid-char";

/**
 * @description format any string to kebab case
 * @param value string
 * @returns string as kebab case
 * @example hello-world
 */
export const FormatToKebabCase: FnFormatCase = (value: string): string => {

	if (typeof value !== 'string') return 'sample';
	if (value.length < 2) return 'sample';

	const copy = value.replace(/_/g, '-');
	let formatted = copy[0].toLowerCase();

	let index = 1;
	while (copy[index]) {
		
		const isUpper = IsUpperChar(copy[index]);
		const isValid = IsValidKebabChar(copy[index]);

		if (isValid) {
			formatted += copy[index];
			index++;
			continue;
		}

		if (isUpper) {
			formatted = formatted + '-' + copy[index].toLowerCase();
			index++;
			continue;
		};

		index++;
	}

	const first = formatted[0] === '-';
	const last = formatted[formatted.length - 1] === '-';

	if (first) formatted = formatted.slice(1);
	if (last) formatted = formatted.slice(0, formatted.length - 1);

	formatted = formatted.replace(/--/g, '-');
	return formatted;
}

export default FormatToKebabCase;
