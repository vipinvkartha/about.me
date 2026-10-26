import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://about-me-ten-nu.vercel.app',
  integrations: [tailwind()]
});