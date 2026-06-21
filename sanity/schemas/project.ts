const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'gradient', title: 'Card Gradient CSS', type: 'string' },
    { name: 'monogram', title: 'Monogram (1-2 letters)', type: 'string' },
    { name: 'challenge', title: 'Challenge', type: 'text' },
    { name: 'solution', title: 'Solution', type: 'text' },
    { name: 'deliverables', title: 'Deliverables', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'metrics', title: 'Metrics', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'value', title: 'Value', type: 'string' },
        ],
      }],
    },
    { name: 'result', title: 'Result (short)', type: 'string' },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' },
  ],
};

export default project;
