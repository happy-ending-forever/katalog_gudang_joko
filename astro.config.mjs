import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  prefetch: {
    // Preload halaman saat user hover di link
    defaultStrategy: 'hover',
    // Prefetch semua link yang terlihat di viewport
    prefetchAll: true,
  },
  // Optimasi build
  build: {
    inlineStylesheets: 'auto',
  },
});
