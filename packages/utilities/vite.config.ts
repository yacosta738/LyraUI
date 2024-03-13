/** @type {import('vite').UserConfig} */
import dts from 'vite-plugin-dts';
import { defineConfig, mergeConfig } from 'vite';
import { resolve } from 'path';
import { sharedViteConfig } from '@lyra/config/vite.config.shared';
export default mergeConfig(
	sharedViteConfig(__dirname),
	defineConfig({
		build: {
			cssCodeSplit: true,
			target: 'esnext',
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				fileName: 'utilities',
				name: 'utilities',
			},
		},
		plugins: [dts()],
	})
);
