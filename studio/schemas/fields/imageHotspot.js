export default {
  name: 'imageHotSpot',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
};
