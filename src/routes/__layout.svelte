<script>
	import Bookend from '$lib/components/layout/Bookend.svelte'
</script>

<svelte:head>
	<title>MetaKart</title>
	<meta name="description" content="Kart through the Metaverse" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header>
	<Bookend />
</header>

<main>
	<slot />
</main>

<footer>
	<Bookend />
</footer>

<style lang="scss">
	:global(*) {
		color: white;
		font-family: 'Source Sans Pro', sans-serif;
	}

	:global(body) {
		margin: 0;
		overflow-x: hidden;
	}
</style>
