<div>
	<slot />
</div>

<style lang="scss">
	div {
		max-width: 1200px;
		margin: auto;
		padding: 40px;
	}

	@media screen and (max-width: 540px) {
		div {
			padding: 20px;
		}
	}
</style>
