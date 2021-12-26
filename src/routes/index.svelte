<script>
	import Spacer from '$lib/components/common/Spacer.svelte'
	import DashedStripe from '$lib/components/decorative/DashedStripe.svelte'
	import SpeedStripes from '$lib/components/decorative/SpeedStripes.svelte'
	import Content from '$lib/components/layout/Content.svelte'
	import RacerGrid from '$lib/components/RacerGrid.svelte'
	import RaceTrack from '$lib/components/racetrack/RaceTrack.svelte'
	import BenefitsSection from '$lib/components/sections/BenefitsSection.svelte'
	import Faq from '$lib/components/sections/FAQ.svelte'
	import NftSection from '$lib/components/sections/NftSection.svelte'
	import RoadmapSection from '$lib/components/sections/RoadmapSection.svelte'
	import SpecialNftsSection from '$lib/components/sections/SpecialNftsSection.svelte'
	import TeamSection from '$lib/components/sections/TeamSection.svelte'
	import WelcomeSection from '$lib/components/sections/WelcomeSection.svelte'
</script>

<!-- <RaceTrack /> -->
<div class="banner">
	<img src="coming_soon.jpg" alt="coming soon" />
</div>

<div id="main" class="outer">
	<NftSection />

	<WelcomeSection />

	<!-- <SpeedStripes /> -->

	<BenefitsSection />

	<RoadmapSection />

	<Spacer height="32px" />

	<!-- <DashedStripe /> -->

	<TeamSection />

	<Faq />
</div>

<style lang="scss">
	h1 {
		color: white;
		font-size: 3em;
		font-weight: 700;
		text-align: center;
		margin: 0 0 16px 0;

		font-family: 'PT Sans', sans-serif;
	}

	.outer {
		// background: linear-gradient(#028d3a, #108cd1, #082636 #3f4f87, #431044);
		// background: linear-gradient(-20deg, #431044, #8a0205, #073c8a, #028d3a);
		background: #01abe8;
	}

	.banner {
		background: black;

		display: flex;
		justify-content: center;

		img {
			max-width: 100%;
		}
	}

	.section-what {
		div {
			display: flex;
			justify-content: center;
		}
	}

	.section-investors {
		background: #111111;

		.row {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-evenly;
			gap: 32px;
		}

		img {
			height: 112px;
			min-width: 120px;
		}
	}
</style>
