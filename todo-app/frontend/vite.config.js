import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

const defaultConfig = {
  plugins: [react()],
  server: {
    proxy: {
      '/api': "https://fm-todo-backend-production.up.railway.app"
    }
  }
};

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const apiURL = `https://${env.VITE_BACKEND_URL}`;

  return defaultConfig

  // if (command === "serve") {
  //   return {
  //     ...defaultConfig,
  //     server: {
  //       proxy: {
  //         "/api": "http://localhost:6003",
  //       },
  //     },
  //   };
  // } else {
  //   return {
  //     ...defaultConfig,
  //     server: {
  //       proxy: {
  //         "/api": {
  //           target:'https://fm-todo-backend-production.up.railway.app',
  //           changeOrigin: true,
  //         },
  //       },
  //     },
  //   };
  // }
});
