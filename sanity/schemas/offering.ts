const offering = {
  name: 'offering',
  title: 'Offering',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'icon', title: 'Icon (emoji)', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
};

export default offering;
