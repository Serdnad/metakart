<script lang="ts">
	export let title: string
	export let color = 'white'
</script>

<h1 style="color: {color}">{title}</h1>

<style lang="scss">
	h1 {
		color: white;
		font-size: 3em;
		font-weight: 900;
		// text-align: center;
		margin: 0 0 16px 0;
	}
</style>
