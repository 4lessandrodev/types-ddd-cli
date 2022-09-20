import { Bright, FgRed, Reset, FgGreen } from "./colors";
import { redX, party } from "./icons";

export const PrintError = (title: string, message: string,): void => {
	console.log(
		`\n ${redX}${FgRed} ${Bright}${title}${Reset} ${message} ${Reset}\n`
	);
};

export const PrintSuccessMessage = (title: string, message: string) => {
	console.log(
		`\n ${party}${FgGreen} ${Bright}${title}${Reset} ${message} ${Reset}`
	);
};

export const PrintInfo = (icon: string, title: string, message: string) => {
	console.log(
		`\n ${icon}${FgGreen} ${Bright}${title}${Reset} ${message} ${Reset}`
	);
}
