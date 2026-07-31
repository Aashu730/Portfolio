# Aashutosh R. Sabat — Personal Portfolio

A premium portfolio website built for a fresher Software Developer with skills in Python, Java, SQL, React, and web development.

## Overview

This portfolio demonstrates a modern, premium landing experience with glassmorphism, gradients, and polished animations. It showcases sections for personal introduction, skills, education timeline, featured project, published research, certifications, achievements, GitHub summary, and a contact form.

## Features

- React + Vite
- Tailwind CSS styling
- Framer Motion animations
- Responsive mobile-first layout
- Dark / Light mode toggle
- Glassmorphism cards and soft shadows
- Smooth scroll progress indicator
- Contact form with EmailJS placeholder
- 404 page and smooth page transitions
- SEO-ready metadata and modern HTML structure

## Installation

1. Open a terminal in the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL shown in the terminal.

## Build

Create a production build with:

```bash
npm run build
```

## Deployment

This project is ready for deployment to Vercel or GitHub Pages.

- Vercel: connect the repository and use the default build command `npm run build`.
- GitHub Pages: build the app and deploy the contents of the `dist` folder.

## Customization

- Update `src/utils/content.js` to replace placeholder links, contact email, and social profiles.
- Configure EmailJS values in `src/components/Contact.jsx` with your `service_id`, `template_id`, and `public_key`.
- Replace hero and profile placeholders in `public/` with your real photo and branding.

## Notes

The portfolio is production-ready and built for a software developer seeking roles in Python, Java, web development, and IT graduate positions.
