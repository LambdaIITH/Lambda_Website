# How to Add Blogs

To add a new blog post, follow these steps:

## 1. Create a Markdown File
Create a new `.md` file in this `public/blog` folder. Use a descriptive filename with hyphens (e.g., `my-blog-post.md`).

## 2. Add Frontmatter
At the top of your markdown file, include frontmatter with the following format:

```yaml
---
title: Your Blog Title
date: Jan 15, 2026
description: A brief description of your blog post
tags: [Tag1, Tag2, Tag3]
---
```

### Frontmatter Fields:
- **title**: The title of your blog post (required)
- **date**: Publication date in format "Mon DD, YYYY" (e.g., "Jan 15, 2026")
- **description**: Brief description shown in the blog listing
- **tags**: Array of tags for filtering (e.g., [Security, API, DevOps])

## 3. Add Your Content
After the frontmatter, write your blog post content in Markdown format.

## Example Blog Post

```markdown
---
title: Getting Started with Next.js
date: Jan 15, 2026
description: Learn the basics of Next.js and how to build modern web applications
tags: [DevTools, JavaScript, Web Development]
---

# Getting Started with Next.js

Your blog content goes here...

## Section Title

More content...
```

## How It Works

- The blog page automatically scans this folder for `.md` files
- It parses the frontmatter to extract title, date, description, and tags
- All tags from all posts are automatically displayed as filter buttons
- Users can click tags to filter posts
- Posts can be sorted by date (latest first or oldest first)

## Features

✅ Automatic blog loading from markdown files  
✅ Working tag filters (click tags to filter posts)  
✅ Sort by date (latest or oldest first)  
✅ Post count updates based on filters  
✅ Responsive design for mobile and desktop  

Just add a new `.md` file and it will automatically appear on the blog page!
