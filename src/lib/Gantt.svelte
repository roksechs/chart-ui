<script module lang="ts">
	type TaskDTO = {
		id: number;
		name: string;
		start: string;
		end: string;
	};
</script>

<script lang="ts">
	import { Task } from './Task.js';
	import dayjs from 'dayjs';
	import { pageRange } from './store.js';
	import Bar from './Bar.svelte';

	export let taskDTOs: TaskDTO[] = [];
	$: tasks = taskDTOs.map(convertDTOToTask);

	function convertDTOToTask(dto: TaskDTO): Task {
		return new Task(dto.id, dto.name, dayjs(dto.start), dayjs(dto.end));
	}

	let body: HTMLDivElement;

	$: dayDuration = $pageRange.end.diff($pageRange.start, 'day');
	$: dayWidthRatio = 1 / dayDuration;
	$: bodyWidth = body ? body.clientWidth : 0;
	$: dayScaleFactor = bodyWidth * dayWidthRatio;

	function generateDateScaler(weekly: boolean = false) {
		const dates = [];
		let currentDate = $pageRange.start.clone();

		if (weekly) {
			while (currentDate.isBefore($pageRange.end)) {
				dates.push(currentDate.format('YYYY-MM-DD'));
				currentDate = currentDate.add(1, 'week');
			}
		} else {
			while (currentDate.isBefore($pageRange.end)) {
				dates.push(currentDate.format('YYYY-MM-DD'));
				currentDate = currentDate.add(1, 'day');
			}
		}

		return dates;
	}

	function calculateWidth(task: Task): number {
		return task.diff('day') * dayScaleFactor;
	}

	function calculateLeftOffset(task: Task): number {
		return task.start.diff($pageRange.start, 'day') * dayScaleFactor;
	}
</script>

<div bind:this={body} class="flex flex-col">
	<div class="relative flex justify-between border-b border-gray-300">
		<div class="header-cell border-r border-gray-300">Task</div>
		{#each generateDateScaler() as date}
			<div class="flex-1 border-r border-gray-300 text-center">{date}</div>
		{/each}
	</div>

	{#each tasks as task}
		<div class="relative h-10 border-b border-gray-300">
			<div class="header-cell border-r border-gray-300">
				{task.name}
			</div>
			<Bar offset={calculateLeftOffset(task)} width={calculateWidth(task)} />
		</div>
	{/each}
</div>

<style lang="postcss">
	.header-cell {
		@apply absolute z-10 flex h-full w-32 items-center justify-center border-gray-300 bg-lime-100;
	}
</style>
