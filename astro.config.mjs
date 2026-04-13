// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  redirects: {
    '/': 'https://mestredasferramentas.com.br/',
    '/[...path]': 'https://mestredasferramentas.com.br/[path]'
  }
});