<script>
	import SectionTitle from '../common/SectionTitle.svelte'
	import Spacer from '../common/Spacer.svelte'
	import Content from '../layout/Content.svelte'
</script>

<Content>
	<SectionTitle title="WELCOME" />
	<p>
		Join MetaKart, a collection of 5,000 racers and 5,000 karts that can be used to play in the
		Metaverse. Buy one of the 10,000 racers and karts to challenge your friends!
	</p>
	<p>
		The MetaKart game will be an online pvp racing game to be launched in the metaverse in 2022.
		Owners of a MetaKart NFT (whether a kart or a racer) will be able to join and play with other
		NFT owners to earn MetaKart Tokens.
	</p>

	<Spacer height="32px" />

	<SectionTitle title="SPECIAL NFTs" />
	<p>
		Most of the 5,000 characters and 5,000 karts have similar attributes, but owning one of the 5
		special characters or 5 special karts will allow users to play with a better character and kart
		(with better attributes such as speed and acceleration)
	</p>
	<Spacer height="32px" />

	<img src="/kart1.jpg" />
	<!-- <div /> -->
</Content>

<style lang="scss">
	div {
		margin: auto;
		width: 80%;
		height: 320px;
		background: black;
	}

	p {
		font-size: large;
		line-height: 1.8;
	}

	img {
		margin: 0 10vw;
		width: calc(100% - 20vw);

		border-radius: 32px;
	}
</style>
