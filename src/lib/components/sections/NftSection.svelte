<script>
	import Content from '../layout/Content.svelte'
</script>

<Content>
	<div class="grid">
		<img class="nft" src="nft1.jpg" />
		<img class="nft" src="nft2.jpg" />
		<img class="nft" src="nft3.jpg" />
		<img class="nft" src="nft4.jpg" />
	</div>
</Content>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(256px, 1fr));
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
		gap: 32px;
	}

	.nft {
		height: 100%;
		width: 100%;
		border-radius: 32px;

		box-shadow: 0 0 3px 1px #33333388;
	}
</style>
