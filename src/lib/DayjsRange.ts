import dayjs from 'dayjs'; 
import type { Dayjs } from 'dayjs';

class DayjsRange {
	private _start: Dayjs;
	private _end: Dayjs;

	constructor(start: string | Dayjs, end: string | Dayjs) {
		this._start = dayjs(start);
		this._end = dayjs(end);
	}

	get start(): Dayjs {
		return this._start;
	}

	get end(): Dayjs {
		return this._end;
	}

	contains(date: string | Dayjs): boolean {
		const dayjsDate = dayjs(date);
		return dayjsDate.isAfter(this._start) && dayjsDate.isBefore(this._end);
	}

	overlaps(range: DayjsRange): boolean {
		return this._start.isBefore(range.end) && this._end.isAfter(range.start);
	}

	shift(amount: number, unit: dayjs.ManipulateType): DayjsRange {
		const newStart = this._start.add(amount, unit);
		const newEnd = this._end.add(amount, unit);
		return new DayjsRange(newStart, newEnd);
	}

	diff(unit: dayjs.UnitType = 'millisecond'): number {
		return this._end.diff(this._start, unit);
	}

	toString(): string {
		return `Range: ${this._start.format()} - ${this._end.format()}`;
	}
}

export default DayjsRange;
