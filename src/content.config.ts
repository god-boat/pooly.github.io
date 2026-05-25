import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const manual = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/manual" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		number: z.string().regex(/^\d+(\.\d+)*$/),
		section: z.enum(["concepts", "views", "instruments", "reference"]),
		order: z.number().default(999),
		draft: z.boolean().default(false),
	}),
});

const guides = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		order: z.number().default(999),
		difficulty: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
		estimatedTime: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	manual,
	guides,
};
