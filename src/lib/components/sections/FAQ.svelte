<script>
	import SectionTitle from '../common/SectionTitle.svelte'
	import Spacer from '../common/Spacer.svelte'

	import FaqItem from '../FaqItem.svelte'
	import Content from '../layout/Content.svelte'
</script>

<div class="container">
	<Content>
		<SectionTitle title="FAQs" color="#01ABE8" />

		<FaqItem
			prompt="How much is a MetaKart NFT?"
			description="Each MetaKart NFT will be 0.05 ETH for the pre-sale and 0.07 ETH for the public sale."
		/>

		<Spacer height="32px" />

		<FaqItem
			prompt="How do I join the presale?"
			description="Join our discord to join the presale. The first 500 discord members to invite 3 or more real users will be added to our presale. More information in our discord!"
		/>

		<Spacer height="32px" />

		<FaqItem
			prompt="How do I mint a MetaKart NFT?"
			description="To mint, simply set up your MetaMask wallet and on the day of either presale or public, press the ‘Mint’
button on the top of our website and link your MetaMask wallet. Then confirm through MetaMask to mint
a MetaKart NFT."
		/>

		<Spacer height="32px" />

		<FaqItem
			prompt="Are there secondary royalties?"
			description="Yes, 10% of secondary sales will be taken as royalties for the team. We will use this money to make sure
that MetaKart continues growing."
		/>
	</Content>
</div>

<style lang="scss">
	.container {
		background: white;

		margin-top: -32px;
		margin-bottom: 32px;
	}
</style>
