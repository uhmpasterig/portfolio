export default {
  name: 'frameworks',
  type: 'document',
  title: 'Frameworks',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'className',
      type: 'string',
      title: 'Class Name',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
