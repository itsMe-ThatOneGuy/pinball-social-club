const normalizeDate = (date) => {
	return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};

const normalizeTitle = (title) => {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
};

export function normalizeCalendar(entries) {
	return entries
		.flatMap((entry) =>
			entry.data.eventDates.map((date) => {
				const titleSlug = normalizeTitle(entry.data.title);
				const normalizedDate = normalizeDate(date);

				return {
					id: `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}-${titleSlug}`,
					sourceId: entry.id,
					title: entry.data.title,
					date: normalizedDate,
					doorTime: entry.data.doorTime,
					startTime: entry.data.startTime,
					entryFee: entry.data.entryFee,
					prize: entry.data.prize,
					thumbnail: entry.data.thumbnail,
					descriptionHtml: entry.rendered.html,
				};
			}),
		)
		.sort((a, b) => a.date.getTime() - b.date.getTime());
}
