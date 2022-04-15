export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Primary Links',
      type: 'array',
      of: [
        {
          name: 'navItem',
          title: 'Nav Item',
          type: 'button',
        },
      ],
    },
    {
      name: 'leftTitle',
      title: 'Left Title',
      type: 'string',
    },
  ],
};
