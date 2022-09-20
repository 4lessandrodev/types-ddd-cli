import { PrintHelp } from "@commands/help";
import { Resource } from "@types";
import { MainHelp } from "./help-center";
import { LogoDefault } from "./logo";

export const ShowHelp = (resource: Resource | null): number => {
	console.log(LogoDefault);

	if (resource) return PrintHelp[resource]();

	console.log(MainHelp);
	
	return (0);
}

export default ShowHelp;
