<script>
	import Spacer from '../common/Spacer.svelte'
</script>

<header>
	<div class="container">
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
				<img src="/twitter_white.png" alt="twitter" />
			</a>
			<Spacer width="24px" />
			<a href="https://www.instagram.com/metakartnft/" target="blank">
				<img src="/instagram_white.png" alt="instagram" />
			</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		background: #111111;
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
		color: white;
		font-weight: 700;
	}

	a {
		text-decoration: none;
	}

	.logo {
		height: 32px;
		width: 32px;
	}
</style>
