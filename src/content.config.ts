import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const calendarItems = defineCollection({
	loader: glob({
		base: './src/content/calendar',
		pattern: '**/*.md',
	}),
	schema: z.object({
		title: z.string(),
		eventDates: z.array(z.coerce.date()),
		doorTime: z.string(),
		startTime: z.string(),
		entryFee: z.number(),
		prize: z.string(),
		thumbnail: z.string(),
	}),
});

export const collections = {
	calendarItems,
};
