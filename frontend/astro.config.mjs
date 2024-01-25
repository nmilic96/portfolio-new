import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://nmilic96.github.io/portfolio',
  publicDir: './public',
  buildOptions: {
    out: './dist',  // output directory
  },
  integrations: [mdx(), sitemap(), tailwind(), icon(), react()]
});