import { FnIsVersionAction } from "@types";

/**
 * @description check if user is asking for cli version
 * @param args terminal typed args
 * @returns true if args includes version word
 */
export const IsVersionAction: FnIsVersionAction = (args: Array<string>): boolean => {
	const isArray = Array.isArray(args);
	return isArray && args.map((arg) => {
		if (typeof arg === 'string') {
			const action = arg.toLowerCase();
			return action === '--version' || action === 'version';
		}
		return false;
	}).includes(true);
}

export default IsVersionAction;
