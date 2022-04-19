export default {
  name: 'projectDetail',
  title: 'Project Detail',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'agency',
      title: 'Agency',
      type: 'reference',
      to: [{ type: 'agency' }],
    },
    {
      name: 'year',
      title: 'Year Completed',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'styledText',
    },
    {
      name: 'descriptionLong',
      title: 'Long Description',
      type: 'styledText',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    },
    {
      name: 'team',
      title: 'Team',
      type: 'text',
      rows: 3,
    },
    {
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'award' }] }],
    },
    {
      name: 'image',
      title: 'Thumbnail',
      type: 'image',
    },
    {
      name: 'url',
      title: 'Link URL',
      type: 'string',
    },
  ],
};
