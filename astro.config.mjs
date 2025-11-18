import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Source directory for Astro files
  srcDir: './src-astro',

  // Public directory for static assets
  publicDir: './public-astro',

  // Build output to 'build' instead of 'dist' for gh-pages compatibility
  outDir: './build',

  // Site URL
  site: 'https://noahbjohnson.net',

  // Base path (root for noahbjohnson.net)
  base: '/',
});
