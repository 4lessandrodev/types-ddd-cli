import { FnIsHelpAction } from "@types";

/**
 * @description check if user is asking for help
 * @param args terminal typed args
 * @returns true if args includes help value
 */
export const IsHelpAction: FnIsHelpAction = (args: Array<string>): boolean => {
	const isArray = Array.isArray(args);
	return isArray && args.map((arg) => {
		if (typeof arg === 'string') {
			const action = arg.toLowerCase();
			return action === '--help' || action === 'help';
		}
		return false;
	}).includes(true);
}

export default IsHelpAction;
