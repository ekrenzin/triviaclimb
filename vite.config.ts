import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

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
