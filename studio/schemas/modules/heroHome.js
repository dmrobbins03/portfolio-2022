const moduleTitle = 'Hero Home';

export default {
  name: 'heroHome',
  title: moduleTitle,
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'buttonSecondary',
      title: 'Secondary Button',
      type: 'button',
    },
    {
      name: 'image',
      title: 'Fallback Image',
      type: 'imageHotSpot',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title: title || moduleTitle,
        subtitle: `Module > ${moduleTitle}`,
        media: media,
      };
    },
  },
};
