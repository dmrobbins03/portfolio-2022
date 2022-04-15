export default {
  name: 'projectDetail',
  title: 'Project Detail',
  type: 'document',
  fields: [
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [{ type: 'heroHome' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
};
