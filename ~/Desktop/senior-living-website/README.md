# Senior Living Placement Website

A comprehensive senior living placement website built with React, TypeScript, and Tailwind CSS.

## Features

- **Personalized Assessment Quiz**: Interactive quiz to match families with senior living options
- **Caregiver Resources**: Comprehensive blog with articles on senior care topics
- **Community Directory**: Searchable database of senior living facilities
- **Expert Guidance**: Free consultation services
- **Responsive Design**: Mobile-first design that works on all devices

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd ~/Desktop/senior-living-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

```
senior-living-website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx     # Main navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── FloatingContactButton.tsx # Floating contact button
│   │   └── ui/            # UI utility components
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx   # Homepage
│   │   ├── BlogPage.tsx   # Blog listing page
│   │   ├── BlogPostPage.tsx # Individual blog post
│   │   ├── QuizIntroPage.tsx # Quiz introduction
│   │   ├── DedicatedQuizPage.tsx # Main quiz component
│   │   └── ...           # Other pages
│   ├── data/              # Static data
│   │   └── blogPosts.ts   # Blog post data
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Replit

1. Create a new Node.js Repl
2. Copy all files to the Repl
3. Run `npm install` then `npm run dev`

## Contact

For support or questions, contact us at larryb@slphomes.org

## License

MIT License 