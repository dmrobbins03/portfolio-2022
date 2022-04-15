export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Link Title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Link URL',
      type: 'string',
    },
    {
      name: 'isTargetBlank',
      title: 'Open Link in New Tab?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
};
