import { writable } from 'svelte/store';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import DayjsRange from './DayjsRange.js';
dayjs.extend(duration);

/**
 * Represents the current range of the Gantt chart.
 */
export const pageRange = writable(
	new DayjsRange(dayjs('2024-10-01'), dayjs('2024-10-01').add(14, 'day'))
);

/**
 * Represents the datetime currently centered in the Gantt chart view.
 */
export const centerDatetime = writable(dayjs());

/**
 * Shifts the page range by the specified amount and unit.
 */
export function shiftPageRange(amount: number, unit: dayjs.ManipulateType) {
	pageRange.update(range => range.shift(amount, unit));
}
