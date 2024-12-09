import { writable } from 'svelte/store';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
dayjs.extend(duration);

/**
 * Represents the current range of the Gantt chart.
 */
export const pageRange = writable({
	start: dayjs('2023-10-01'),
	end: dayjs('2023-10-14')
});

/**
 * Represents the datetime currently centered in the Gantt chart view.
 */
export const centerDatetime = writable(dayjs());
