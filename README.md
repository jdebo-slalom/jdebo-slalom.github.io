# Slalom GenAI Showcase

A responsive, modern static website built with React and TypeScript that showcases Generative AI advances and potential use cases across industries. This site is Slalom-branded and publicly accessible without requiring login.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS
- **Interactive UI**: Engaging user interface with interactive elements
- **Comprehensive Content**: Information about GenAI advances and industry use cases
- **Slalom Branding**: Incorporates Slalom's visual identity and brand colors

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Jest for testing

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/jdebo-slalom/jdebo-slalom.github.io.git
   cd jdebo-slalom.github.io
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages

## Deployment

This site is configured for deployment to GitHub Pages in two ways:

### Manual Deployment

To manually deploy the site:

```
npm run deploy
```

### Automated Deployment via GitHub Actions

This repository includes a GitHub Actions workflow that automatically deploys the site to GitHub Pages whenever changes are pushed to the main branch.

The workflow performs the following steps:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the application
5. Deploys to GitHub Pages

You can also manually trigger a deployment from the Actions tab in the GitHub repository.

## License

This project is proprietary and owned by Slalom, LLC.
