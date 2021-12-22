<script lang="ts">
	export let prompt: string
	export let description: string

	export let invertColors = false

	let expanded = false

	function toggle() {
		expanded = !expanded
	}
</script>

<div class="container {expanded ? 'expanded' : ''}  {invertColors ? 'inverted' : ''}">
	<div class="header" on:click={toggle}>
		<h1>{prompt}</h1>
		<img class={expanded ? 'expanded' : ''} src="down.png" />
	</div>

	<p class={expanded ? 'expanded' : ''}>{description}</p>
</div>

<style lang="scss">
	h1,
	p {
		margin: 8px;
	}

	.container {
		transition: all 1s;
		transition: max-height 0.5s ease-in-out;

		background: #01abe8;
		border-radius: 24px;
		padding: 16px;

		max-height: 52px;
		overflow: hidden;

		&.expanded {
			max-height: 200px;
		}

		&.inverted {
			background: white;
			h1,
			p {
				color: #01abe8;
			}
		}
	}

	.header {
		cursor: pointer;

		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
			height: 32px;

			&.expanded {
				transform: rotateZ(180deg);
			}
		}
	}
</style>
