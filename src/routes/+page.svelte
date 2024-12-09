<script>
	import Gantt from '$lib/Gantt.svelte';

	const demoData = [
		{ id: 1, name: 'Task 1', start: '2023-10-04', end: '2023-10-05' },
		{ id: 2, name: 'Task 2', start: '2023-10-04', end: '2023-10-07' },
		{ id: 3, name: 'Task 3', start: '2023-10-06', end: '2023-10-10' }
	];
</script>

<Gantt taskDTOs={demoData} />
