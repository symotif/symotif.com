import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	base: "/symotif.com/",
	ssr: {
		noExternal: ['three', 'troika-three-text'],
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
