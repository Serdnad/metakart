<script>
	import Racer from './Racer.svelte'
</script>

<div class="track">
	{#each [1, 2, 3, 4, 5, 6, 7] as _}
		<Racer />
	{/each}
</div>

<style lang="scss">
	.track {
		background: #050505;
		height: 80vh;

		padding-top: 64px;
	}

	@keyframes teeter {
		from {
			transform: rotateZ(30deg);
		}
		to {
			transform: rotateZ(60deg);
		}
	}
</style>
