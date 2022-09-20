import CreateFromGithub from "@actions/create-no-compilation";
import CreateFromGithubAndCompile from "@actions/create-default-compilation";
import CreateReactAndCompileDefault from "@actions/create-react-default-compilation";
import { FnCommands } from "@types";

export const Commands: FnCommands = {
	'create': {
		'rest-api': CreateFromGithub,
		'lambda': CreateFromGithub,
		'command': CreateFromGithubAndCompile,
		'cmd': CreateFromGithubAndCompile,
		'ddd-adapter': CreateFromGithubAndCompile,
		'dad': CreateFromGithubAndCompile,
		'ddd-aggregate': CreateFromGithubAndCompile,
		'dag': CreateFromGithubAndCompile,
		'ddd-entity': CreateFromGithubAndCompile,
		'den': CreateFromGithubAndCompile,
		'ddd-event': CreateFromGithubAndCompile,
		'evt': CreateFromGithubAndCompile,
		'ddd-model': CreateFromGithubAndCompile,
		'dmd': CreateFromGithubAndCompile,
		'ddd-module': CreateFromGithubAndCompile,
		'dmo': CreateFromGithubAndCompile,
		'ddd-repository': CreateFromGithubAndCompile,
		'dre': CreateFromGithubAndCompile,
		'ddd-value-object': CreateFromGithubAndCompile,
		'dvo': CreateFromGithubAndCompile,
		'use-case': CreateFromGithubAndCompile,
		'usc': CreateFromGithubAndCompile,
		'web-component': CreateReactAndCompileDefault,
		'wbc': CreateReactAndCompileDefault,
		'microservice': CreateFromGithub,
		'mcs': CreateFromGithub,
		'ms-client': CreateFromGithub,
		'msc': CreateFromGithub,
		'web-app': CreateFromGithub,
		'wap': CreateFromGithub
	}
};

export default Commands;
