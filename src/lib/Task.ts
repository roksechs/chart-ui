import type dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import DayjsRange from './DayjsRange.js';

export class Task {
	constructor(
		private _id: number,
		private _name: string,
		private _range: DayjsRange
	) {}

	get id(): number {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get start(): Dayjs {
		return this._range.start;
	}

	get end(): Dayjs {
		return this._range.end;
	}

	getRange(unit: dayjs.UnitType = 'millisecond'): number {
		return this._range.diff(unit);
	}
}
