#!/usr/bin/env node

import "../register-paths";
import Commands from "@commands/index";
import GetSchemaFromResource from "@lib/args/get-schema-for-resource";
import { GetAction, GetArgs, GetResource, IsHelpAction } from "@lib/args";
import { IsVersionAction, RemoveFilesArgs, ValidateInputs } from "@lib/args";
import ExtractPropsFromArgs from "@lib/args/get-props-from-args";
import { GetCommandPath, GetLibPath } from "@lib/system-info";
import ShowHelp from "@ui/help";
import ShowVersion from "@ui/version";
import { resolve } from "node:path";
import { PrintError } from "@ui/print";

function main(): number {
	const args = RemoveFilesArgs(GetArgs(process));
	const resource = GetResource(args);
	const action = GetAction(GetArgs(process));
	const isHelp = IsHelpAction(args) || action === 'help';
	const isVersion = IsVersionAction(args) || action === 'version';
	const libPath = GetLibPath(process, require);
	
	if (isVersion) return ShowVersion(libPath);
	
	if (isHelp || !resource || !action) return ShowHelp(resource);
	const schema = GetSchemaFromResource(resource);
	
	if (!schema) {
		PrintError(resource, 'not defined in schema');
		return (1);
	};
	
	const isValidInputs = ValidateInputs(args);
	if(isValidInputs) return isValidInputs;
	const originPath = resolve('downloads', schema.fileTarName);
	
	const props = ExtractPropsFromArgs(args);
	const path = GetCommandPath(process);

	if (!path) return (1);

	props.destinationPath = resolve(path, props.destinationPath);

	Commands[action][resource]({...props,...schema, originPath, resource });
	return (0);
}

export default main();
