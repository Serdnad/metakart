<script>
	import SectionTitle from './common/SectionTitle.svelte'
	import RoadmapEntry from './RoadmapEntry.svelte'
	import RoadmapLine from './RoadmapLine.svelte'
</script>

<div class="container">
	<div class="line">
		<RoadmapLine />
	</div>

	<div>
		<RoadmapEntry
			title="5% - ENGINES ON!"
			description="Take a first-class seat in the MetaKart bar. Lounge with your friends in the discord server as we’ll be giving away a racer and kart once we hit 10,000 members."
		/>

		<RoadmapEntry
			title="10% - READY!"
			description="20,000 discord members reached on discord. Another raffle for a kart."
		/>

		<RoadmapEntry
			title="20% - SET!"
			description="500 pre-sale members chosen through a draw on our website. Whitelist drops at 7PM EST on the
15th of February, 2022."
		/>

		<RoadmapEntry
			title="40% - GO!"
			description="Public sale at 7PM EST on the 16th of February, 2022."
		/>

		<RoadmapEntry
			title="50% - LAP 1!"
			description="Raffle for first batch and second batch of tickets to racing events (in March and April). 100 NFT
owners will be chosen. Also, a mystery airdrop to 50 lucky owners. Also, every token holder starts recieving 1,000 MKART tokens on the first of every month."
		/>

		<RoadmapEntry
			title="70% - LAP 2!"
			description="MetaKart game drops on iOS and Android in mid-2022 and MetaKart NFT drop 1.5 with Metaups
and utilities."
		/>

		<RoadmapEntry
			title="80% - LAP 3!"
			description="MetaKart NFT drop 2.0. New racers, new karts and new Metaups."
		/>

		<RoadmapEntry
			title="90% - FINAL LAP!"
			description="MetaKart game drops in the metaverse in 2022. MetaKart NFT drop 3.0. New racers, new karts
and new Metaups."
		/>

		<RoadmapEntry title="100% - FINISH LINE!" />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
	}

	.line {
	}
</style>
