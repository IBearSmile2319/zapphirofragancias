import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// loadEnv()
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@action': '/src/action',
        '@auth': '/src/auth',
        '@pages': '/src/pages',
        '@utils': '/src/utils',
        '@assets': '/src/assets',
        '@styles': '/src/styles',
        '@constants': '/src/constants',
        '@router': '/src/router',
        '@store': '/src/store',
        '@helpers': '/src/helpers',
        '@api': '/src/api',
        '@config': '/src/config',
        '@services': '/src/services',
        '@types': '/src/types',
      },
    },
  })
}
// export default defineConfig({
//   plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       // target: '[::]:3000',
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     },
  //   },
  // },
// })
