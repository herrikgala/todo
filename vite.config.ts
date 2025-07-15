import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig(() => {
	const baseURL = '/todo'

	return {
		plugins: [vue(), vueDevTools()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'~': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		base: baseURL,
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/styles/abstracts/global.scss" as *;`
				}
			}
		},
		build: {
			outDir: 'docs'
		},
		server: {
			port: 3001,
			host: true,
			origin: baseURL
		},
		json: {
			stringify: true
		}
	}
})
