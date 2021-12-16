<script lang="ts">
	import { onMount } from 'svelte'
	import ScrollButton from '../ScrollButton.svelte'
	import Racer from './Racer.svelte'

	let numRacers = 8
</script>

<div class="track">
	{#each Array(numRacers) as _}
		<Racer />
	{/each}
</div>

<ScrollButton />

<style lang="scss">
	.track {
		// background: #050505;
		background-image: url('/asphalt.jpg');
		height: calc(100vh - 64px - 64px);

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
