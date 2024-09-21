import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'


export default defineConfig({

  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    open: true,
    port: 3000, // 这里指定你想要的端口
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
