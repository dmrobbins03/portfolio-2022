export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'buttonIcon',
          title: 'Social Link',
          type: 'buttonIcon',
        },
      ],
    },
  ],
};
