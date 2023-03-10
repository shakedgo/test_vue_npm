const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.js",
			name: "MyLib",
			fileName: (format) => `my-lib.${format}.js`,
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				// Provide global variables to use in the UMD build
				// Add external deps here
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	plugins: [vue()],
	css: {
		loaderOptions: {
			scss: {
				data: `@import "./src/assets/styles.scss";`,
			},
		},
	},
});
