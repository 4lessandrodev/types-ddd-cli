import Schema from "@lib/schema";
import { FnGetSchemaFromResource, Resource, TemplateSchema } from "@types";

/**
 * @description get schema from a resource
 * @param resource Resource type
 * @returns TemplateSchema or null
 */
export const GetSchemaFromResource: FnGetSchemaFromResource = (resource: Resource): TemplateSchema | null => {
	const schema = Schema.find((template) => template.resourceName === resource);
	if (!schema) return null;
	return schema;
};

export default GetSchemaFromResource;
