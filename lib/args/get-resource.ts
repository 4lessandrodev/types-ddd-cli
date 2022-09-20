import ValidResources from "@actions/resources";
import { FnGetResource, Resource } from "@types";

/**
 * @description resource must on index 1
 * @param args Array with args
 * @returns resource or null
 */
export const GetResource: FnGetResource = (args: Array<string>): Resource | null => {
	const isArray = Array.isArray(args);

	if (isArray && args.length > 1) {
		const command = args[1].toLowerCase();
		let i = 0;
		while (ValidResources[i]) {
			const resource = ValidResources[i];
			if (command.includes(resource)) return resource;
			i++;
		}
	}

	return null;
}

export default GetResource;
