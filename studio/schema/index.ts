import { type SchemaTypeDefinition } from "sanity";
import basicPage from "./basicPage";

const documents = [basicPage];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents],
};
