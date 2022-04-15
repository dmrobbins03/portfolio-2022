const moduleTitle = 'Share Links';

export default {
  name: 'shareLinks',
  title: moduleTitle,
  type: 'object',
  fields: [
    {
      name: 'preface',
      title: 'Sharing Preface',
      type: 'string',
      initialValue: 'Share this post on:',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Social Platform Title',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Share Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare({ title, media }) {
      return {
        title: moduleTitle,
        subtitle: `Module > ${moduleTitle}`,
        media: media,
      };
    },
  },
};
