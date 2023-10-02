import { type SchemaTypeDefinition } from 'sanity';
import languages from './languages';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    languages
    // Add more schema types here.
  ],
};
