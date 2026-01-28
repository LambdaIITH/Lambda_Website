import { getBlogPosts, getAllTags } from '@/lib/blog-loader';
import BlogPageClient from './blog-client';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const allTags = getAllTags(posts);

  return <BlogPageClient posts={posts} allTags={allTags} />;
}
