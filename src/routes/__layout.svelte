<script>
	import Bookend from '$lib/components/layout/Bookend.svelte'
	import Footer from '$lib/components/layout/Footer.svelte'
	import Header from '$lib/components/layout/Header.svelte'
</script>

<svelte:head>
	<title>MetaKart</title>
	<meta name="description" content="Kart through the Metaverse" />

	<link rel="stylesheet" src="/app.css" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>
	<!-- <Bookend /> -->
	<Footer />
</footer>

<style lang="scss">
	:global(*) {
		color: white;
		font-family: 'Futura', 'Source Sans Pro', sans-serif;
	}

	:global(body) {
		margin: 0;
		overflow-x: hidden;
	}

	@font-face {
		font-family: 'Futura';
		src: url('/fonts/FuturaLT.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Futura';
		src: url('/fonts/FuturaLT-Bold.woff2') format('woff2');
		font-weight: bold;
	}
</style>
