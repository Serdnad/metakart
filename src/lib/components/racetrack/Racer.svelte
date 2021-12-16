<script lang="ts">
	import { onMount } from 'svelte'

	let racer: HTMLDivElement

	onMount(() => {
		// let r =
		racer.style.animationDelay = -3 * Math.random() + 's'
		racer.style.animationDuration = 3 + (Math.random() - 0.5) + 's'
	})
</script>

<div bind:this={racer} class="racer">
	<img src="/cyber-astro.png" />
</div>

<style lang="scss">
	.racer {
		animation: racing 3s infinite linear;

		img {
			width: 25vw;
			margin: -32px 0;
		}
	}

	@keyframes racing {
		from {
			transform: translateX(-40vw);
		}
		to {
			transform: translateX(100vw);
		}
	}
</style>
