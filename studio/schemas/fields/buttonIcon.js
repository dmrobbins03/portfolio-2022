export default {
  name: 'buttonIcon',
  title: 'Button w/ Icon',
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
      name: 'image',
      title: 'Button Icon Image',
      type: 'image',
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
