/** @type {import('vite').UserConfig} */
import dts from 'vite-plugin-dts';
import pkg from './package.json' assert { type: 'json' };
import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';
import { sharedViteConfig } from '@lyra/config/vite.config.shared';
export default mergeConfig(
	sharedViteConfig(__dirname),
	defineConfig({
		build: {
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				name: 'utilities',
			},
			rollupOptions: {
				external: [
					...Object.keys(pkg.dependencies), // don't bundle dependencies
					/^node:.*/, // don't bundle built-in Node.js modules (use protocol imports!)
				],
			},
			target: 'esnext', // transpile as little as possible
		},
		plugins: [dts({ rollupTypes: true })], // emit TS declaration files
	})
);
