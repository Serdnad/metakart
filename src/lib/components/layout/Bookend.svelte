<script>
	import Spacer from '../common/Spacer.svelte'
</script>

<div class="outer">
	<div class="row">
		<img class="rotating" src="/logo.png" alt="metakart" />
		<Spacer width="8px" />
		<h1>MetaKart</h1>
	</div>

	<div class="socials row">
		<a href="https://discord.com/" target="blank"> <img src="/discord.png" alt="discord" /></a>
		<Spacer width="24px" />
		<a href="https://twitter.com/" target="blank"> <img src="/twitter.png" alt="twitter" /></a>
	</div>
</div>

<style lang="scss">
	.outer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		background: #080808;
		padding: 0px 32px;
	}

	.row {
		display: flex;
		align-items: center;
	}

	div {
		display: flex;
	}

	img {
		height: 32px;
	}

	.socials {
		img {
			height: 24px;
		}
	}

	.rotating {
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
