import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import https from 'https';

let server = {};
if (process.env.NODE_ENV === 'development') {
  server = {
	https: {
		cert: './localhost.pem',
		key: './localhost-key.pem',
	},
  };
}


export default defineConfig({
	plugins: [sveltekit()],
	server,
});
