<script>
	import ScrollButton from '../ScrollButton.svelte'
	import Racer from './Racer.svelte'
</script>

<div class="track">
	{#each [1, 2, 3, 4, 5, 6, 7] as _}
		<Racer />
	{/each}
</div>

<ScrollButton />

<style lang="scss">
	.track {
		background: #050505;
		height: calc(100vh - 128px);

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
