import { BlogCard } from './BlogCard';

const posts = [
  {
    title: 'The Future of Sustainable Marine Biofuel',
    date: '2024-02-25',
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    },
    excerpt: 'Exploring the latest innovations in seaweed-based biofuel production and its impact on global sustainability.',
    tags: ['Innovation', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80',
    readingTime: '5 min read',
    slug: 'future-of-sustainable-marine-biofuel',
  },
  {
    title: 'Ocean Farming: A Revolution in Clean Energy',
    date: '2024-02-20',
    author: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    },
    excerpt: 'How advanced ocean farming techniques are transforming the renewable energy landscape.',
    tags: ['Technology', 'Environment'],
    image: 'https://images.unsplash.com/photo-1562315921-45f2d131c3e2?auto=format&fit=crop&q=80',
    readingTime: '4 min read',
    slug: 'ocean-farming-clean-energy-revolution',
  },
  {
    title: 'Reducing Carbon Footprint Through Marine Biofuels',
    date: '2024-02-15',
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    },
    excerpt: 'Analysis of how marine biofuels contribute to global carbon reduction goals.',
    tags: ['Climate', 'Research'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    readingTime: '6 min read',
    slug: 'reducing-carbon-footprint-marine-biofuels',
  },
];

export function BlogList() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in sustainable marine biofuel technology
            and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}