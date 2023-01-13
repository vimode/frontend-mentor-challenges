import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

const defaultConfig = {
  plugins: [react()],
};

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const apiURL = `${env.VITE_BACKEND_URL}`;
  if (command === "serve") {
    return {
      ...defaultConfig,
      server: {
        proxy: {
          "/api": "http://localhost:6003",
        },
      },
    };
  } else {
    return {
      ...defaultConfig,
      server: {
        proxy: {
          "/api": {
            target: apiURL,
            changeOrigin: true,
          },
        },
      },
    };
  }
});
