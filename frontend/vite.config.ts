import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
	
	plugins: [react(), tsconfigPaths(),mkcert()],
	server: {
		
    port: 3000,
		proxy: {
			'/api': {
				target: 'https://localhost:7275',

				secure: false,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		}
	},
});
