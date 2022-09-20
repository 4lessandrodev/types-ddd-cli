import Schema from "@lib/schema";
import { Resource } from "@types";

export const ValidResources: Array<Resource> = Schema.map((data): Resource => data.resourceName);

export default ValidResources;
