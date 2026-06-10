const insight = {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: { required: () => unknown }) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['SEO', 'Web Systems', 'AI & Automation', 'Performance', 'Case Study'] } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'readTime', title: 'Read Time (minutes)', type: 'number' },
    { name: 'author', title: 'Author', type: 'string', initialValue: 'Abdul Basit A.' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'seoTitle', title: 'SEO Title', type: 'string' },
    { name: 'seoDescription', title: 'SEO Description', type: 'text' },
  ],
};

export default insight;
