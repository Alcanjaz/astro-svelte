/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    setupFiles: ['./test-setup.ts'],
    environment: 'jsdom',
  },
});