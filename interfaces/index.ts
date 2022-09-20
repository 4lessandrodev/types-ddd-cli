export interface Dirent {
	isFile(): boolean;
	isDirectory(): boolean;
	isBlockDevice(): boolean;
	isCharacterDevice(): boolean;
	isSymbolicLink(): boolean;
	isFIFO(): boolean;
	isSocket(): boolean;
	name: string;
}

export type Action = 'create' | 'help' | 'version';

export interface TemplateSchema { 
	templateUrl: string;
	fileTarName: string;
	cacheExpiresSec: number;
	resourceName: Resource;
	templateFolderName: string;
};

export interface Args extends TemplateSchema { 
	name: string;
	originPath: string;
	resource: Resource;
	destinationPath: string;
};

export type Resource = 'ddd-value-object' | 'dvo' | 'rest-api' | 'lambda' | 'ddd-entity' | 'den' | 'ddd-aggregate' | 'dag' | 'ddd-repository' | 'dre' | 'ddd-module' | 'dmo' | 'ddd-model' | 'dmd' | 'ddd-adapter' | 'dad' | 'ddd-event' | 'evt' | 'use-case' | 'usc' | 'command' | 'cmd' | 'web-component' | 'wbc' | 'microservice' | 'mcs' | 'ms-client' | 'msc' | 'web-app' | 'wap';

export interface ExtractTarProps {
	tarPath: string;
	folderPath: string;
}

export interface DownloadTemplateProps {
	templateUrl: string;
	tarPath: string;
}

export interface CacheExpiredProps {
	templateUrl: string;
	fileTarName: string;
	resource: Resource;
}


export interface RequestCache {
	lastRequest: number;
	fileTarName: string;
}

export interface Cache {
	createdAt: Date;
	updatedAt: Date;
	requests: Array<RequestCache>;
}

export interface ExtractProps {
	zipTarFilePath: string;
	destinationPath: string;
}

export interface CopyFileProps {
	folderOrigin: string;
	destinationPath: string;
}

interface Replace {
	[key: string]: string;
}

export interface CompileArgs {
	originPath: string;
	destinationPath: string;
	data: Array<Replace>;
	resourceName: Resource;
	name: string;
}

export interface MinArgs {
	name: string;
	destinationPath: string;
}

export type System = NodeJS.Platform;
export interface UserInfo { executionPath: string; destinationPath: string; system: System };
export type FnGetLibPath = (process: NodeJS.Process, require: NodeRequire) => string | null;
export type FnGetCommandPath = (process: NodeJS.Process) => string | null;
export type FnGetSystem = (process: NodeJS.Process) => System;
export type FnGetArgs = (process: NodeJS.Process) => Array<string>;
export type FnGetActionArg = (args: Array<string>) => Action | null;
export type FnIsValidAction = (action: string) => boolean;
export type FnIsHelpAction = (args: Array<string>) => boolean;
export type FnIsVersionAction = (args: Array<string>) => boolean;
export type FnGetResource = (args: Array<string>) => Resource | null;
export type FnRemoveFilesArgs = (args: Array<string>) => Array<string>;
export type FnExtractPropsFromArgs = (args: Array<string>) => MinArgs;
export type FnValidateInputs = (args: Array<string>) => number;
export type FnExtractTar = (props: ExtractTarProps) => number;
export type FnDownloadTemplate = (props: DownloadTemplateProps) => Promise<number>;
export type FnIsCacheExpired = (props: TemplateSchema) => boolean;
export type FnUpdateCacheExpiration = (props: CacheExpiredProps) => number;
export type FnExtractFile = (props: ExtractProps) => Promise<number>;
export type FnGetCacheFile = () => Cache;
export type FnCopyFiles = (props: CopyFileProps) => number;
export type FnReadDir = (path: string) => Array<Dirent>;
export type FnBaseCreate = (props: Args) => Promise<number>;
export type FnCompile = (props: CompileArgs) => Promise<number>;
export type FnRenameFile = (oldPath: string, newPath: string) => number;
export type FnWriteFileContent = (path: string, data: string) => number;
export type FnApplyData = (file: Dirent, args: CompileArgs) => Promise<number>;
export type FnCreateDefaultCacheFile = () => number;
export type FnExistsFile = (path: string) => boolean;
export type FnGetSchemaFromResource = (resource: Resource) => TemplateSchema | null;
export type FnCreateFolderIfNotExists = (path: string) => number;
export type FnFormatCase = (value: string) => string;
export type FnIsValidChar = (char: string) => boolean;
export type FnChangeFileExtension = (filePath: string, fileName: string) => string;
export type FnDefineLibPath = (path?: string[]) => string;
export type FnPrintHelpForResource = () => number;

export type PrintCommands = {
	[key in Resource]: FnPrintHelpForResource
}

export type FnCommand = (args: Args) => Promise<number>;

export type Commands = {
	[key in Resource]: FnCommand
}

export type FnCommands = {
	'create': Commands
};
