import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import https from 'https';
import fs from 'fs';

// read the private key and certificate
const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};

export default defineConfig({
	plugins: [sveltekit()],
	server: {
	  https: httpsOptions,
	},
});
