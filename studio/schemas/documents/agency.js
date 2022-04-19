export default {
  name: 'agency',
  title: 'Agency',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link URL',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role(s)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'styledText',
    },
    {
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
    },
  ],
};
