import { TemplateSchema } from "@types";

const THREE_DAYS_IN_SEC = 259200;
const SEVEN_DAYS_IN_SEC = 604800;
/**
 * @description schema defines urls to get templates
 * @summary params 
 * @param zipball to zip
 * @param tarball to tar
 * @example https://api.github.com/repos/4lessandrodev/nest-template/{param}/main
 */
export const Schema: Array<TemplateSchema> = [
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/rest-api/legacy.tar.gz/refs/heads/main',
		fileTarName: 'create-rest-api.tar',
		cacheExpiresSec: SEVEN_DAYS_IN_SEC,
		templateFolderName: 'create-rest-api',
		resourceName: 'rest-api'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/simple-lambda/legacy.tar.gz/refs/heads/main',
		fileTarName: 'lambda.tar',
		cacheExpiresSec: SEVEN_DAYS_IN_SEC,
		templateFolderName: 'lambda',
		resourceName: 'lambda'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/command/legacy.tar.gz/refs/heads/main',
		fileTarName: 'command.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'command',
		resourceName: 'command'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/command/legacy.tar.gz/refs/heads/main',
		fileTarName: 'command.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'command',
		resourceName: 'cmd'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-adapter/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-adapter.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-adapter',
		resourceName: 'ddd-adapter'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-adapter/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-adapter.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-adapter',
		resourceName: 'dad'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-aggregate/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-aggregate.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-aggregate',
		resourceName: 'ddd-aggregate'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-aggregate/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-aggregate.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-aggregate',
		resourceName: 'dag'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-entity/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-entity.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-entity',
		resourceName: 'ddd-entity'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-entity/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-entity.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-entity',
		resourceName: 'den'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-event/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-event.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-event',
		resourceName: 'ddd-event'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-event/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-event.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-event',
		resourceName: 'evt'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/model/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-model.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-model',
		resourceName: 'ddd-model'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/model/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-model.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-model',
		resourceName: 'dmd'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-module/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-module.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-module',
		resourceName: 'ddd-module'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-module/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-module.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-module',
		resourceName: 'dmo'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-repository/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-repository.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-repository',
		resourceName: 'ddd-repository'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/ddd-repository/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-repository.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-repository',
		resourceName: 'dre'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/value-object/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-value-object.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-value-object',
		resourceName: 'ddd-value-object'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/value-object/legacy.tar.gz/refs/heads/main',
		fileTarName: 'ddd-value-object.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'ddd-value-object',
		resourceName: 'dvo'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/use-case/legacy.tar.gz/refs/heads/main',
		fileTarName: 'use-case.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'use-case',
		resourceName: 'use-case'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/use-case/legacy.tar.gz/refs/heads/main',
		fileTarName: 'use-case.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'use-case',
		resourceName: 'usc'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/web-component/legacy.tar.gz/refs/heads/main',
		fileTarName: 'web-component.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'web-component',
		resourceName: 'web-component'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/web-component/legacy.tar.gz/refs/heads/main',
		fileTarName: 'web-component.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'web-component',
		resourceName: 'wbc'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/microservice/legacy.tar.gz/refs/heads/main',
		fileTarName: 'microservice.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'microservice',
		resourceName: 'microservice'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/microservice/legacy.tar.gz/refs/heads/main',
		fileTarName: 'microservice.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'microservice',
		resourceName: 'mcs'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/microservice-client/legacy.tar.gz/refs/heads/main',
		fileTarName: 'microservice-client.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'microservice-client',
		resourceName: 'ms-client'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/microservice-client/legacy.tar.gz/refs/heads/main',
		fileTarName: 'microservice-client.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'microservice-client',
		resourceName: 'msc'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/web-app/legacy.tar.gz/refs/heads/main',
		fileTarName: 'web-app.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'web-app',
		resourceName: 'web-app'
	},
	{
		templateUrl: 'https://codeload.github.com/4lessandrodev/web-app/legacy.tar.gz/refs/heads/main',
		fileTarName: 'web-app.tar',
		cacheExpiresSec: THREE_DAYS_IN_SEC,
		templateFolderName: 'web-app',
		resourceName: 'wap'
	}
];

export default Schema;
