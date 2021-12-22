<script>
	import { onMount } from 'svelte'
	import Spacer from '../common/Spacer.svelte'

	let mobile = false

	onMount(() => {
		mobile = window.matchMedia('(max-width: 720px)').matches
	})
</script>

<header>
	<div class="container">
		<div>
			<img class="logo" src="logo.png" alt="logo" />
			<Spacer width="8px" />

			{#if mobile}
				<h1>MK</h1>
			{:else}
				<h1>METAKART</h1>
			{/if}
		</div>

		<div>
			<a href="https://discord.gg/mAYev7JF" target="blank">
				{#if mobile}
					<img src="/discord_black.png" />
				{:else}
					<h1>JOIN DISCORD</h1>
				{/if}
			</a>
			<Spacer width="16px" />
			<a href="https://twitter.com/metakartnft" target="blank">
				<img src="/twitter.png" alt="twitter" />
			</a>
			<Spacer width="16px" />
			<a href="https://www.instagram.com/metakartnft/" target="blank">
				<img src="/instagram.png" alt="instagram" />
			</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: sticky;
		top: 0;

		background: white;
		box-shadow: 0 0 3px 1px #333333aa;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 16px;
		max-width: 1200px;
		margin: auto;
	}

	div {
		display: flex;
		align-items: center;
	}

	img {
		height: 24px;
	}

	h1 {
		color: black;
		font-weight: 700;
	}

	.logo {
		height: 32px;
		width: 32px;

		animation: rotation 3s infinite linear;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
</style>
