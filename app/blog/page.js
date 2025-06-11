"use client"
import { motion } from 'framer-motion';
import { sharedStyles } from '../../styles';
import Link from 'next/link';
import { useState } from 'react';
import BlogPostModal from '../../components/BlogPostModal';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Supabase and Next.js',
    date: '2023-10-26',
    excerpt: 'Learn how to set up your first project with Supabase and Next.js, covering authentication and database interactions.',
    fullContent: 'This is the full content for Getting Started with Supabase and Next.js. It would typically be much longer and contain detailed instructions, code snippets, and explanations. For this example, we\'re keeping it brief.',
  },
  {
    id: 2,
    title: 'Building a Scalable SaaS with Modern Technologies',
    date: '2023-09-15',
    excerpt: 'Explore best practices for building a robust and scalable SaaS application, from architecture to deployment.',
    fullContent: 'This is the full content for Building a Scalable SaaS with Modern Technologies. It would delve into architectural patterns, microservices, cloud deployments, and more.',
  },
  {
    id: 3,
    title: 'Tips for Effective UI/UX Design in SaaS',
    date: '2023-08-01',
    excerpt: 'Discover key principles and practical tips for creating intuitive and engaging user interfaces for your SaaS product.',
    fullContent: 'This is the full content for Tips for Effective UI/UX Design in SaaS. It would cover user research, wireframing, prototyping, and visual design principles.',
  },
  {
    id: 4,
    title: 'Mastering User Authentication with Next.js and Supabase',
    date: '2023-07-20',
    excerpt: 'A deep dive into implementing secure and seamless user authentication flows using Next.js and Supabase.',
    fullContent: 'This is the full content for Mastering User Authentication. It would detail various authentication methods, security best practices, and integration with Supabase Auth.',
  },
  {
    id: 5,
    title: 'Optimizing Your SaaS for Performance',
    date: '2023-06-10',
    excerpt: 'Strategies and tools to ensure your SaaS application is fast, responsive, and provides an excellent user experience.',
    fullContent: 'This is the full content for Optimizing Your SaaS for Performance. It would discuss code splitting, image optimization, server-side rendering, and caching strategies.',
  },
  {
    id: 6,
    title: 'Monetizing Your SaaS Product',
    date: '2023-05-01',
    excerpt: 'Exploring various pricing models and monetization strategies for your SaaS, including subscription and freemium.',
    fullContent: 'This is the full content for Monetizing Your SaaS Product. It would cover different pricing strategies, payment gateway integrations, and subscription management.',
  },
  {
    id: 7,
    title: 'The Future of AI in SaaS',
    date: '2023-04-20',
    excerpt: 'A look into how artificial intelligence is transforming the SaaS landscape and what to expect next.',
    fullContent: 'This is the full content for The Future of AI in SaaS. It would explore AI-driven features, machine learning applications, and the ethical considerations of AI in business.',
  },
  {
    id: 8,
    title: 'Building a Strong SaaS Community',
    date: '2023-03-10',
    excerpt: 'Strategies for fostering engagement and loyalty among your SaaS users through community building.',
    fullContent: 'This is the full content for Building a Strong SaaS Community. It would cover forums, user groups, feedback mechanisms, and support strategies.',
  },
  {
    id: 9,
    title: 'Leveraging Data Analytics for SaaS Growth',
    date: '2023-02-01',
    excerpt: 'How to use data to understand user behavior, identify trends, and drive strategic decisions for your SaaS.',
    fullContent: 'This is the full content for Leveraging Data Analytics for SaaS Growth. It would discuss data collection, analysis tools, A/B testing, and making data-driven decisions.',
  },
  {
    id: 10,
    title: 'Effective Content Marketing for SaaS Startups',
    date: '2023-01-15',
    excerpt: 'Tips and tricks for creating compelling content that attracts and converts your target audience.',
    fullContent: 'This is the full content for Effective Content Marketing for SaaS Startups. It would cover blog posts, whitepapers, webinars, and SEO strategies.',
  },
];

export default function BlogPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div style={{
        backgroundColor: sharedStyles.colors.background,
        padding: '4rem 2rem',
        position: 'relative',
    }}>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                maxWidth: '80rem',
                margin: '0 auto',
            }}
        >
            <motion.h1
                style={{
                    ...sharedStyles.typography.heading,
                    fontSize: '3rem',
                    marginBottom: '2.5rem',
                    textAlign: 'center',
                    color: sharedStyles.colors.primary,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                Our Blog
            </motion.h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
            }}>
                {blogPosts.map((post, index) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={sharedStyles.animations.cardHover}
                        onClick={() => openModal(post)}
                        style={{
                            ...sharedStyles.card.base,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                        }}
                    >
                        <div>
                            <h2 style={{
                                ...sharedStyles.typography.heading,
                                fontSize: '1.5rem',
                                marginBottom: '0.5rem',
                                color: sharedStyles.colors.primary,
                            }}>
                                {post.title}
                            </h2>
                            <p style={{
                                ...sharedStyles.typography.body,
                                fontSize: '0.9rem',
                                color: '#4a5568',
                                marginBottom: '1rem',
                            }}>
                                {post.date}
                            </p>
                            <p style={{
                                ...sharedStyles.typography.body,
                                color: '#4a5568',
                                marginBottom: '1.5rem',
                            }}>
                                {post.excerpt}
                            </p>
                        </div>
                        <Link href={`/blog/${post.id}`} style={{
                            ...sharedStyles.typography.body,
                            color: sharedStyles.colors.accent.blue,
                            textDecoration: 'none',
                            fontWeight: '600',
                            transition: 'color 0.2s ease-in-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = sharedStyles.colors.primary)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = sharedStyles.colors.accent.blue)}
                        >
                            Read More &rarr;
                        </Link>
                    </motion.article>
                ))}
            </div>
        </motion.div>

        {/* Background Effects */}
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at 50% 50%, ${sharedStyles.colors.accent.purple}10 0%, transparent 50%)`,
            zIndex: 1,
        }} />

        <BlogPostModal isOpen={isModalOpen} onClose={closeModal} post={selectedPost} />
    </div>
  );
} 