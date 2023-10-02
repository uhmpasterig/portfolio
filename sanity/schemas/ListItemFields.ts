export default [
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
    name: 'color',
    type: 'string',
    title: 'Color',
    options: {
      list: [
        { title: 'Dark Green', value: 'dark-green' },
        { title: 'Dark Blue', value: 'dark-blue' },
        { title: 'Blue', value: 'blue' },
        { title: 'Emerald', value: 'emerald' },
        { title: 'Purple', value: 'purple' },
        { title: 'Light Purple', value: 'light-purple' },
        { title: 'Pink', value: 'pink' },
        { title: 'Red', value: 'red' },
        { title: 'Dark Neutral', value: 'dark-neutral' },
        { title: 'Light Yellow', value: 'light-yellow' },
        { title: 'Orange', value: 'orange' },
      ],
    },
    validation: (Rule: { required: () => any }) => Rule.required(),
  },
];
