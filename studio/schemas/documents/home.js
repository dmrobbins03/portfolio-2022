export default {
  name: 'home',
  title: 'Home',
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
