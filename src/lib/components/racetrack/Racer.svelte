<script lang="ts">
	import { onMount } from 'svelte'

    let view
	let racer: HTMLDivElement
	let racerImg: HTMLImageElement

	onMount(() => {
		const animSecs = 3

		racer.style.animationDelay = -animSecs * Math.random() + 's'
		racer.style.animationDuration = animSecs + (Math.random() - animSecs * 0.25) + 's'
		racerImg.style.animationDelay = -1 * Math.random() + 's'
	})
</script>

<div bind:this={racer} class="racer">
	<img bind:this={racerImg} src="/cyber-astro.png" />
</div>

<style lang="scss">
	.racer {
		animation: racing 3s infinite linear;

		img {
			// width: 25vw;
			height: 15vh;
			margin: -32px 0;

			animation: teeter 0.5s infinite linear alternate;
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

	@keyframes teeter {
		from {
			transform: rotateZ(-3deg);
		}
		to {
			transform: rotateZ(3deg);
		}
	}
</style>
