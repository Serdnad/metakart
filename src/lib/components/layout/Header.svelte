<script>
	import Spacer from '../common/Spacer.svelte'
</script>

<header>
	<div>
		<img src="/logo.png" alt="metakart" />
		<h1>MetaKart</h1>
	</div>

	<div>
		<a href="https://discord.com/" target="blank"> <img src="/discord.png" alt="discord" /></a>
		<Spacer width="24px" />
		<a href="https://twitter.com/" target="blank"> <img src="/twitter.png" alt="twitter" /></a>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		background: #111111cc;
		padding: 0px 32px;
	}

	div {
		display: flex;
	}

	img {
		height: 32px;
	}
</style>
