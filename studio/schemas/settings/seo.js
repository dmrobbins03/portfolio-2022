const moduleTitle = 'SEO';

export default {
  name: 'seo',
  title: moduleTitle,
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Meta & Social Image',
      type: 'imageHotSpot',
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
};
