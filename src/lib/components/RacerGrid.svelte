<div class="grid">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as racer}
		<img src="/sample2.gif" />
	{/each}
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(256px, 1fr));
		grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));

		gap: 32px;
		margin: 48px 0;

		img {
			transition: all 0.5s;

			width: 100%;
			height: 100%;

			min-width: 256px;

			border-radius: 12px;
			box-shadow: 0px 0px 4px 2px #00000044;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
</style>
