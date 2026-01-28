# How to Add Projects

To add a new project, follow these steps:

## 1. Create a Markdown File
Create a new `.md` file in this `public/projects` folder. Use a descriptive filename with hyphens (e.g., `my-project.md`).

## 2. Add Frontmatter
At the top of your markdown file, include frontmatter with the following format:

```yaml
---
title: Project Name
subtitle: Organization/Team Name
status: Ongoing
description: Brief description of your project
techs: [Tech1, Tech2, Tech3]
---
```

### Frontmatter Fields:
- **title**: The title of your project (required)
- **subtitle**: Organization or team name (required)
- **status**: Either "Ongoing" or "Complete" (required)
- **description**: Brief description shown on hover (required)
- **techs**: Array of technologies used. Supported: [Astro, JavaScript, TypeScript, Tailwind, SolidJS, React, Svelte, Sveltekit, Vue]

## 3. Add Your Content
After the frontmatter, write your project details in Markdown format.

## Example Project File

```markdown
---
title: Dashboard
subtitle: IIT Hyderabad
status: Ongoing
description: A comprehensive dashboard for managing student information
techs: [React, TypeScript, Tailwind]
---

# Dashboard Project

This is a student management dashboard...

## Features

- Real-time data visualization
- Student information management
- Analytics and reporting
```

## Supported Technologies

The following technologies are recognized and display icons:

✅ Astro  
✅ JavaScript  
✅ TypeScript  
✅ Tailwind  
✅ SolidJS  
✅ React  
✅ Svelte  
✅ Sveltekit  
✅ Vue  

## How It Works

- The projects page automatically scans this folder for `.md` files
- It parses the frontmatter to extract title, subtitle, status, description, and technologies
- Projects are grouped by status (Ongoing/Complete)
- Users can filter projects by technology
- The page dynamically updates when new `.md` files are added

## Features

✅ Automatic project loading from markdown files  
✅ Working technology filters (click to filter projects)  
✅ Status-based grouping (Ongoing/Complete)  
✅ Project descriptions on hover  
✅ Responsive design for mobile and desktop  
✅ Icon display for all supported technologies  

Just add a new `.md` file and it will automatically appear on the projects page!
