export default defineConfig({
  base: "/PickuWebSite/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});
