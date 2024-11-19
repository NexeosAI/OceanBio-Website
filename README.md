# OceanBio - Sustainable Seaweed Biofuel Solutions

Web platform showcasing Ocean Biofuels Ltd's innovative seaweed-to-energy technology and environmental impact.

## Tech Stack

- Vite
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui components
- MDX for blog content

## Prerequisites

- Node.js 18+
- npm/yarn

## Setup

```bash
# Clone repository
git clone https://github.com/your-org/oceanbio.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── blog/
│   └── ui/
├── content/
│   └── blog/
├── lib/
└── styles/
```

## Features

- Responsive design
- Blog with MDX support
- Interactive components
- Performance optimised
- SEO ready
- Contact form integration

## Development

```bash
# Lint code
npm run lint

# Type check
npm run typecheck

# Format code
npm run format
```

## Adding Blog Posts

Create `.mdx` files in `content/blog/` with frontmatter:

```mdx
---
title: Post Title
date: YYYY-MM-DD
author: Name
excerpt: Brief description
tags: [tag1, tag2]
image: unsplash-url
---
```

## Environment Variables

```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=contact@example.com
```

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Open pull request

## License

MIT License

## Contact

Email: contact@oceanbiofuels.co.uk
Website: https://oceanbiofuels.co.uk
