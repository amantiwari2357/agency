'use client';

import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS, fetchAPI } from '../../config/api';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  country: string;
  views: number;
  likes: number;
  comments: number;
  publishedAt: string;
}

interface BlogSectionProps {
  country?: string;
}

export default function BlogSection({ country = 'us' }: BlogSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'technology' | 'mobile' | 'cloud' | 'marketing'>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetchAPI<any>(API_ENDPOINTS.blogs);
        if (response.success) {
          setBlogPosts(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
        // Fallback to mock data if API fails
        setBlogPosts([
    {
      id: '1',
      title: '10 Web Development Trends for 2024',
      slug: 'web-development-trends-2024',
      excerpt: 'The web development landscape is constantly evolving. Here are the top trends to watch in 2024...',
      author: 'Sarah User',
      category: 'Technology',
      tags: ['Web Development', 'Technology', 'Trends'],
      country: 'us',
      views: 1250,
      likes: 89,
      comments: 2,
      publishedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Mobile App UX Best Practices',
      slug: 'mobile-app-ux-best-practices',
      excerpt: 'User experience is crucial for mobile app success. Learn the best practices for creating intuitive mobile interfaces...',
      author: 'Emma Manager',
      category: 'Mobile',
      tags: ['UX', 'Mobile App', 'Design'],
      country: 'uk',
      views: 890,
      likes: 67,
      comments: 1,
      publishedAt: '2024-01-12'
    },
    {
      id: '3',
      title: 'Cloud Migration Strategy Guide',
      slug: 'cloud-migration-strategy-guide',
      excerpt: 'Planning to migrate to the cloud? This comprehensive guide covers everything you need to know...',
      author: 'John Manager',
      category: 'Cloud',
      tags: ['Cloud', 'Migration', 'Enterprise'],
      country: 'de',
      views: 1567,
      likes: 124,
      comments: 0,
      publishedAt: '2024-01-10'
    },
    {
      id: '4',
      title: 'AI in Web Development',
      slug: 'ai-in-web-development',
      excerpt: 'Artificial Intelligence is revolutionizing web development. Learn how to leverage AI tools...',
      author: 'Mike User',
      category: 'Technology',
      tags: ['AI', 'Web Development', 'Innovation'],
      country: 'ae',
      views: 2100,
      likes: 189,
      comments: 2,
      publishedAt: '2024-01-08'
    },
    {
      id: '5',
      title: 'Digital Marketing Strategies',
      slug: 'digital-marketing-strategies',
      excerpt: 'Discover proven digital marketing strategies that drive results for businesses of all sizes...',
      author: 'Sarah User',
      category: 'Marketing',
      tags: ['Marketing', 'SEO', 'Social Media'],
      country: 'in',
      views: 945,
      likes: 72,
      comments: 1,
      publishedAt: '2024-01-05'
    }]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === activeTab);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology': return 'bg-blue-100 text-blue-800';
      case 'mobile': return 'bg-purple-100 text-purple-800';
      case 'cloud': return 'bg-green-100 text-green-800';
      case 'marketing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const blogStats = {
    totalPosts: blogPosts.length,
    totalViews: blogPosts.reduce((acc, post) => acc + post.views, 0),
    totalLikes: blogPosts.reduce((acc, post) => acc + post.likes, 0),
    totalComments: blogPosts.reduce((acc, post) => acc + (Array.isArray(post.comments) ? post.comments.length : post.comments || 0), 0),
    topCategory: 'Technology',
    mostViewed: blogPosts.length > 0 ? blogPosts.reduce((max, post) => post.views > max.views ? post : max, blogPosts[0]) : null
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blog</h2>
          <p className="text-xl text-gray-600">Insights, trends, and best practices for your business</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div key="total-posts" className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{blogStats.totalPosts}</div>
            <div className="text-sm text-gray-600">Articles</div>
          </div>
          <div key="total-views" className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{blogStats.totalViews.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Views</div>
          </div>
          <div key="total-likes" className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-purple-600">{blogStats.totalLikes}</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>
          <div key="total-comments" className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">{blogStats.totalComments}</div>
            <div className="text-sm text-gray-600">Comments</div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button
            key="tab-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          <button
            key="tab-technology"
            onClick={() => setActiveTab('technology')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'technology'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Technology
          </button>
          <button
            key="tab-mobile"
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Mobile
          </button>
          <button
            key="tab-cloud"
            onClick={() => setActiveTab('cloud')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'cloud'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Cloud
          </button>
          <button
            key="tab-marketing"
            onClick={() => setActiveTab('marketing')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'marketing'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Marketing
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div key="blog-posts-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <div
              key={`post-${post.id || index}`}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.publishedAt}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>👁 {post.views}</span>
                    <span>❤️ {post.likes}</span>
                    <span>💬 {Array.isArray(post.comments) ? post.comments.length : post.comments || 0}</span>
                  </div>
                  <span className="text-xs">By {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Blog Performance Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Views Chart */}
            <div key="views-chart">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Views by Post</h4>
              <div className="space-y-2">
                {blogPosts.map((post, index) => (
                  <div key={`views-${post.id || index}`} className="flex items-center">
                    <div className="w-32 text-sm text-gray-600 truncate">{post.title.substring(0, 20)}...</div>
                    <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-blue-500 h-4 rounded-full transition-all"
                        style={{ width: `${blogStats.mostViewed ? (post.views / blogStats.mostViewed.views) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 w-16 text-right">{post.views}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Chart */}
            <div key="engagement-chart">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Engagement (Likes + Comments)</h4>
              <div className="space-y-2">
                {blogPosts.map((post, index) => {
                  const commentCount = Array.isArray(post.comments) ? post.comments.length : post.comments || 0;
                  return (
                    <div key={`engagement-${post.id || index}`} className="flex items-center">
                      <div className="w-32 text-sm text-gray-600 truncate">{post.title.substring(0, 20)}...</div>
                      <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                        <div
                          className="bg-green-500 h-4 rounded-full transition-all"
                          style={{ width: `${((post.likes + commentCount) / 200) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 w-16 text-right">{post.likes + commentCount}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post Detail Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(selectedPost.category)}`}>
                      {selectedPost.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">{selectedPost.title}</h2>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>By {selectedPost.author}</span>
                      <span>•</span>
                      <span>{selectedPost.publishedAt}</span>
                      <span>•</span>
                      <span>{selectedPost.country.toUpperCase()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Excerpt</h3>
                  <p className="text-gray-600">{selectedPost.excerpt}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Content</h3>
                  <p className="text-gray-600">{selectedPost.excerpt} Full article content would go here with detailed information about the topic...</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span key={`${tag}-${index}`} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>👁 {selectedPost.views} views</span>
                    <span>❤️ {selectedPost.likes} likes</span>
                    <span>💬 {Array.isArray(selectedPost.comments) ? selectedPost.comments.length : selectedPost.comments || 0} comments</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
