import slugify from 'slugify';

export default {
  name: 'slugGenerated',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'title',
    maxLength: 200, // will be ignored if slugify is set
    slugify: (input) => slugify(input, { lower: true }).slice(0, 200),
  },
};
