import { type SchemaTypeDefinition } from 'sanity';
import languages from './schemas/languages';
import frameworks from './schemas/frameworks';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    languages,
    frameworks,
    // Add more schema types here.
  ],
};
