Next.js and Tailwind Template Source: https://github.com/marcreniel

## Setup

First, clone the repo using git:
```
git clone https://github.com/imedra/notmarc.me
```
Second, install the required dependencies.
```
npm install
```

## Available Commands

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run lint`

Lints the code.

### `npm run build`

Builds the app for production.
Updates build files in the ./out directory.
It correctly bundles Next in production mode and optimizes the build for the best performance.

### `npx serve ./out`

Run this locally after running an `npm run build` to preview the statically exported site as it would appear in production (not the same as `npm run dev`).

## Deployment

On the GitHub website, navigate to Settings → Pages. Under the Build and deployment section, ensure the Source is set to GitHub Actions.

The next.config.js and nextjs.yml files are already preconfigured, so you can simply push your changes to the main branch, and the site will be automatically deployed.
