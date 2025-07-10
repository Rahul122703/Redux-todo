import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

const manifestPWA = {
  manifest: {
    name: "Vite-MUI-Tailwind",
    short_name: "ViteAppdd",
    description: "Vite-MUI-Tailwind-Starter",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icons/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    share_target: {
      action: "/sharetarget",
      method: "POST",
      enctype: "multipart/form-data",
      params: {
        title: "title",
        text: "text",
        url: "url",
        files: [
          {
            name: "file",
            accept: ["*/*"],
          },
        ],
      },
    },
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(manifestPWA)],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
});
