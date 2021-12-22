<script>
	import Spacer from '../common/Spacer.svelte'
</script>

<header>
	<div>
		<img class="logo" src="logo.png" alt="logo" />
		<Spacer width="8px" />

		<h1>METAKART</h1>
	</div>

	<div>
		<a href="https://discord.gg/mAYev7JF" target="blank">
			<h1>JOIN DISCORD</h1>
		</a>
		<Spacer width="24px" />
		<a href="https://twitter.com/metakartnft" target="blank">
			<img src="/twitter.png" alt="twitter" />
		</a>
		<Spacer width="24px" />
		<a href="https://www.instagram.com/metakartnft/" target="blank">
			<img src="/instagram.png" alt="instagram" />
		</a>
	</div>
</header>

<style lang="scss">
	header {
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
	}
</style>
