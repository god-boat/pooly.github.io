import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
	site: "https://pooly.studio",
	integrations: [mdx()],
	output: "static",
});
