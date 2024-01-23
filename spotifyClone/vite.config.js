import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'redux-thunk': require.resolve('redux-thunk'),
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import * as React from 'react';`,
  },
})
