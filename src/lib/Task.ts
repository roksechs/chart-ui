import type dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

export class Task {
	constructor(
		private _id: number,
		private _name: string,
		private _start: Dayjs,
		private _end: Dayjs
	) {}

	get id(): number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get start(): Dayjs {
		return this._start;
	}

	get end(): Dayjs {
		return this._end;
	}

	diff(unit: dayjs.UnitType = 'millisecond'): number {
		return this._end.endOf('date').diff(this._start, unit);
	}
}
