import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

let server = {};

if (process.env.NODE_ENV === 'development') {
  server = {
	https: {
	  key: fs.readFileSync('./key.pem'),
	  cert: fs.readFileSync('./cert.pem'),
	},
  };
}


export default defineConfig({
	plugins: [sveltekit()],
	server,
});
