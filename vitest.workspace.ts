import { defineWorkspace } from 'vitest/config'

// defineWorkspace provides a nice type hinting DX
export default defineWorkspace([
  'apps/*',
  'packages/*',
  {
    // add "extends" to merge two configs together
    extends: './vite.config.ts',
    test: {
      include: ['tests/**/*.{browser, spec}.test.{ts,js}'],
      // it is recommended to define a name when using inline configs
      name: 'happy-dom',
      environment: 'happy-dom',
    }
  },
  {
    test: {
      include: ['tests/**/*.{node}.test.{ts,js}'],
      name: 'node',
      environment: 'node',
    }
  }
])
