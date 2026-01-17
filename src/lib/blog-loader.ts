import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  content: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'public', 'blog');

  // Create blog directory if it doesn't exist
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const posts: BlogPost[] = files.map(file => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      id: file.replace('.md', ''),
      title: data.title || 'Untitled',
      date: data.date || new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      desc: data.description || '',
      tags: data.tags || [],
      content: content
    };
  });

  return posts;
}

export function getAllTags(posts: BlogPost[]): string[] {
  const AVAILABLE_TAGS = [
    'API', 'Automation', 'CI/CD', 'CORS', 'DevOps', 'DevTools',
    'DNS', 'Git', 'GitHub', 'GitHub Actions', 'Google Apps Script',
    'JavaScript', 'Just', 'Linux', 'Make', 'Networking', 'Security',
    'TypeScript', 'Web Development'
  ];

  // Combine available tags with tags from posts to ensure all are shown
  const tags = new Set<string>(AVAILABLE_TAGS);
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
