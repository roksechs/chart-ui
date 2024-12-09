<script>
	import Gantt from '$lib/Gantt.svelte';

	const demoData = [
		{ id: 1, name: 'Task 1', start: '2024-10-04', end: '2024-10-05' },
		{ id: 2, name: 'Task 2', start: '2024-10-04', end: '2024-10-07' },
		{ id: 3, name: 'Task 3', start: '2024-10-06', end: '2024-10-10' }
	];
</script>

<Gantt taskDTOs={demoData} />
