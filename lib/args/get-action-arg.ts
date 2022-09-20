import { Action, FnGetActionArg } from "@types";
import IsHelpAction from "./is-asking-for-help";
import IsValidAction from "./is-valid-action";
import RemoveFilesArgs from "./remove-node-args";

/**
 * @description get terminal args
 * @param args typed args
 * @returns null or action as Action
 */
export const GetAction: FnGetActionArg = (args: Array<string>): Action | null => {

	const onlyArgs = RemoveFilesArgs(args);

	const hasArgs = onlyArgs.length > 0;

	if (!hasArgs) return null;

	const isHelpAction = IsHelpAction(onlyArgs);

	if (isHelpAction) return 'help';

	const isValidAction = IsValidAction(onlyArgs[0]);

	if (!isValidAction) return null;

	return onlyArgs[0] as Action;
}

export default GetAction;
