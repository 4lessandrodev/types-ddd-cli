import { readFileSync } from 'node:fs';
import { Bright, FgBlue, FgGreen, Reset } from "./colors";
import { LogoDefault } from './logo';
import { DefineLibPath } from '../define-lib-path';

export const ShowVersion = (libPath: string | null): number => {
	if (!libPath) return (1);
	const jsonPath = DefineLibPath(['package.json']);
	const text = readFileSync(jsonPath, { encoding: 'utf8' });
	const json = JSON.parse(text);

	const version = json.version;

	console.log(LogoDefault);
	console.log(`
	${FgGreen}${Bright}
	--------- TYPES-DDD CLI ---------
	${Reset}

	${Bright}Version:${Reset}
	${FgBlue}${version}${Reset}
	${FgGreen}
	--------------------------------
	${Reset}
	`);

	return (0);
}

export default ShowVersion;
