import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ravella10.github.io',
  base: '/cloudwaze-website',
  integrations: [tailwind()],
  output: 'static'
}); 