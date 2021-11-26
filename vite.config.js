const { defineConfig } = require('vite')
const reactRefresh = require('@vitejs/plugin-react-refresh')
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // base: "/multiproduct-ecomerce-app-deploy/", // for github page static files
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      "app": path.resolve(__dirname, "./src"),
      "src": path.resolve(__dirname, "./src"),
      "apis": path.resolve(__dirname, "./src/apis"),
      "scss": path.resolve(__dirname, "./src/styles"),
      "store": path.resolve(__dirname, "./src/store"),
      "actions": path.resolve(__dirname, "./src/store/actions"),
      "reducers": path.resolve(__dirname, "./src/store/reducers"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "components": path.resolve(__dirname, "./src/components"),
      "UI": path.resolve(__dirname, "./src/components/UI")
    }
  }
})
