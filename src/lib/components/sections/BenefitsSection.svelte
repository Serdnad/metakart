<script>
	import SectionTitle from '../common/SectionTitle.svelte'
	import Spacer from '../common/Spacer.svelte'
	import FaqItem from '../FaqItem.svelte'
	import Content from '../layout/Content.svelte'
</script>

<div class="container">
	<Content>
		<SectionTitle title="BENEFITS" />

		<FaqItem
			invertColors={true}
			prompt="Access to the MetaKart game"
			description="The MetaKart game will be an online pvp karting/racing game to be launched in the metaverse in 2022.
Owners of a MetaKart NFT (whether a kart or a racer) will be able to play the game (as even if an owner
only owns one of the aforementioned, a stock kart or racer will be given to compensate). Owning one will
give the owner an access code to the game and the owner will play as the avatar.

Playing the game will grant the players the opportunity to win MetaKart tokens; to buy in-game MetaUps,
utilities and more. Also, tokens can be traded for real money."
		/>

		<Spacer height="32px" />

		<FaqItem
			invertColors={true}
			prompt="Tickets to racing events"
			description="A raffle will be held every month to give 100 lucky MetaKart NFT owners tickets to F1 and other racing
events. Join our discord and follow our Instagram and Twitter to stay up to date."
		/>

		<Spacer height="32px" />

		<FaqItem
			invertColors={true}
			prompt="$10,000 monthly events"
			description="A raffle will be held every month to give 10 lucky MetaKart NFT owners $10,000 in rewards (in a
monthly reward scheme for 2 months). Join our discord and follow our Instagram and Twitter to stay up
to date."
		/>

		<Spacer height="32px" />

		<FaqItem
			invertColors={true}
			prompt="Mystery airdrops"
			description="50 lucky MetaKart NFT holders will be airdropped a mystery NFT every month. Stay tuned."
		/>
	</Content>
</div>

<style lang="scss">
</style>
