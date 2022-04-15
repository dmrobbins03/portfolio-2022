import { MdMail } from 'react-icons/md';

export default {
  name: 'styledText',
  title: 'Styled Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal (body)', value: 'normal' },
        { title: 'Heading (h4)', value: 'h4' },
        { title: 'Subheading (h5)', value: 'h5' },
      ],
      lists: [
        { title: 'Bullets (ul)', value: 'bullet' },
        { title: 'Numbered (ol)', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong (Bold)', value: 'strong' },
          { title: 'Emphasis (Highlight)', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External Link',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
          {
            name: 'mailTo',
            type: 'object',
            title: 'Email',
            icon: MdMail,
            fields: [
              {
                title: 'Email Address',
                name: 'email',
                type: 'email',
              },
            ],
          },
        ],
      },
    },
  ],
};
