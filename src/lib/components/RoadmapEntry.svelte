<script lang="ts">
	export let title: string
	export let description: string = null
</script>

<div>
	<div class="bullet-line">
		<div class="circle" />
		<h5>{title}</h5>
	</div>

	{#if description != null}
		<p>{description}</p>
	{/if}
</div>

<style lang="scss">
	.circle {
		height: 24px;
		width: 24px;
		background: white;
		border-radius: 50%;

		margin-left: -16px;
		margin-top: -2px;
	}

	.bullet-line {
		display: flex;
		align-items: center;
	}

	h5 {
		margin: 0;
		margin-left: 16px;
		font-size: large;
	}

	p {
		margin-left: 24px;
		font-size: large;
		line-height: 1.8;
	}
</style>
