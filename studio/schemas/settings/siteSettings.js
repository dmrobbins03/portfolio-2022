export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      options: {
        collapsed: false,
        collapsible: true,
      },
    },
    {
      name: 'navigation',
      type: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
    },
    {
      name: 'footer',
      type: 'footer',
      options: {
        collapsed: false,
        collapsible: true,
      },
    },
    {
      name: 'shareLinks',
      type: 'shareLinks',
      options: {
        collapsed: false,
        collapsible: true,
      },
    },
  ],
};
