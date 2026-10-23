import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const calendarItems = defineCollection({
	loader: glob({
		base: './src/content/calendar',
		pattern: '**/*.md',
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			eventDates: z.array(z.coerce.date()),
			doorTime: z.string(),
			startTime: z.string(),
			entryFee: z.number().optional(),
			prize: z.string().optional(),
			thumbnail: image(),
		}),
});

export const collections = {
	calendarItems,
};
