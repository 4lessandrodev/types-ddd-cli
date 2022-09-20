import ValidActions from "@actions/actions";
import { Action, FnIsValidAction } from "@types";

/**
 * @description validate action
 * @param action as string
 * @returns true if is valid action
 */
export const IsValidAction: FnIsValidAction = (action: string): boolean => {
	return typeof action === 'string' && ValidActions.includes(action.toLowerCase() as Action);
}

export default IsValidAction;
