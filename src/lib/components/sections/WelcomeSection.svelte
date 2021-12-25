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

	<SectionTitle title="NFTs" />
	<p>
		The NFTs is what is used to run the game. There will be a total of 3 drops (with each drop
		having a different exclusivity). The drops are as follows:
	</p>

	<p>
		Special and Legendary NFTs (Drop 1): 10 special racers and karts, alongside 9,990 legendary
		racers and karts at 0.05 pre-sale and 0.07 public sale. Owning a special or legendary racer or
		kart will give holders an advantage in game (mentioned below in Special and Legendary).
	</p>

	<p>
		Elite NFTs (Drop 2): 15,000 elite racers and karts, alongside 100 MetaUps. Second category of
		rarity. Owners will have an advantage over Exclusive NFT owners.
	</p>

	<p>
		Exclusive NFTs (Drop 3): 20,000 exclusive racers and karts, alongside 500 MetaUps. Last drop.
		Not as rare as other drops.
	</p>

	<p>
		Since the game is dropping in 2022, we will allow holders to earn (chosen, whether ETH or
		MetaKart) tokens through staking.
	</p>

	<Spacer height="32px" />

	<img src="/kart1.jpg" />

	<Spacer height="32px" />

	<SectionTitle title="SPECIAL AND LEGENDARY" />

	<p>
		The first drop is the most celebrated and holders will be rewarded with the special and
		legendary NFTs (which have superior attributes such as speed and acceleration over the other two
		drops). Special MetaKart NFTs (racers and karts) have +100% speed and +150% acceleration over
		Elite MetaKart NFTs
	</p>

	<p>
		Legendary MetaKart NFTs have +50% speed and +100% acceleration over Elite MetaKart NFTs. Buy the
		first drop to get a hold of one of the special or legendary NFTs. So owning both a special or
		legendary kart and a special or legendary racer will give double the increase in speed and
		acceleration. More information coming soon.
	</p>

	<SectionTitle title="METAKART GAME" />

	<p>
		Launching in 2022, the MetaKart game will be a play to earn racing game in the metaverse.
		Players are able to play a total of 10 games a day (with their racer or kart). Players do not
		need to own both a racer and a kart and only need to own one to be able to play (however they
		will be given a stock kart or racer that has the lowest speed and acceleration - so owning both
		a racer and a kart is advised).
	</p>

	<p>
		Play by controlling the kart in one of the numerous race tracks available. By coming in 1st, 2nd
		or 3rd in the race against other players, holders will earn the MetaKart Token (more information
		on that coming soon).
	</p>

	<!-- <SectionTitle title="SPECIAL NFTs" />
	<p>
		Most of the 5,000 characters and 5,000 karts have similar attributes, but owning one of the 5
		special characters or 5 special karts will allow users to play with a better character and kart
		(with better attributes such as speed and acceleration)
	</p>
	<Spacer height="32px" /> -->
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

		box-shadow: 0 0 3px 1px #33333388;
	}
</style>
