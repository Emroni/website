# Project

This is my personal website; an animated portfolio showcasing my professional experience, technical skills, and education.

# Tech Stack

-   **Next.js 15** - App Router with React Server Components
-   **React 19** - Latest features including hooks and concurrent rendering
-   **TypeScript 5** - Full type safety across the codebase
-   **Styled Components 6** - CSS-in-JS with SSR support
-   **Google Analytics 4** - Custom analytics integration via Context API
-   **Github Actions** - Automatic deployment to my DigitalOcean droplet

# Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with providers
│   ├── page.tsx      # Main page component
│   └── registry.tsx  # Styled Components SSR setup
├── components/       # Reusable components
├── contexts/         # React Context providers
│   ├── Analytics/    # GA4 integration
│   └── Transitions/  # Scroll animation system
├── sections/         # Page sections
└── types/            # TypeScript definitions
```

# Commands

Use `yarn` to run all commands:

-   `dev` - Start development server with hot reload
-   `build` - Create production-optimized standalone build
-   `lint` - Run ESLint with Next.js config
