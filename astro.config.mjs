// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({applyBaseStyles:false}),expressiveCode({themes: ['ayu-dark','dracula', 'solarized-light']}), mdx(), react(), ],
  devToolbar: {
    enabled: false
  },
});