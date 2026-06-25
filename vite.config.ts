import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["ohana-care-clinic-3.onrender.com"],
    },
  },
});
