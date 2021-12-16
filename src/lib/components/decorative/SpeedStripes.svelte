<script>
	import Spacer from '../common/Spacer.svelte'
</script>

<div class="outer">
	<div class="stripe" />
	<Spacer height="32px" />
	<div class="stripe" />
	<Spacer height="32px" />
	<div class="stripe" />
</div>

<style lang="scss">
	.outer {
		margin: 0px 0 80px 0;
	}

	.stripe {
		background: white;
		height: 32px;
		width: 150vw;

		transform: rotateZ(-6deg);
		margin-left: -32px;
	}
</style>
