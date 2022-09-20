import { FnGetSystem, System } from "@types";

/**
 * @description get operational system
 * @param process NodeProcess
 * @returns platform win32, linux etc.
 */
export const GetSystem: FnGetSystem = (process: NodeJS.Process): System => process.platform;
