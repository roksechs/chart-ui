<script lang="ts">
	export let offset: number;
	export let width: number;
</script>

<svg class="absolute h-full rounded-lg" style="left: {offset}px; width: {width}px;">
	<rect width="100%" height="100%" fill="green" />
</svg>
