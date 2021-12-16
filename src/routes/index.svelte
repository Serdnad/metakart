<script>
	import Spacer from '$lib/components/common/Spacer.svelte'
	import DashedStripe from '$lib/components/decorative/DashedStripe.svelte'
	import SpeedStripes from '$lib/components/decorative/SpeedStripes.svelte'
	import Content from '$lib/components/layout/Content.svelte'
	import RacerGrid from '$lib/components/RacerGrid.svelte'
	import RaceTrack from '$lib/components/racetrack/RaceTrack.svelte'
</script>

<RaceTrack />

<div id="main" class="outer">
	<div class="section-racers">
		<Content>
			<h1>MEET THE RACERS</h1>
			<RacerGrid />
			<h1>AND MORE</h1>
		</Content>
	</div>

	<SpeedStripes />

	<div class="section-what">
		<Content>
			<h1>WHAT IS METAKART</h1>

			<p>think of an aesthetically pleasing way to describe features</p>
			<ul>
				<li>10,000 NFTs</li>
				<li>tickets to races</li>
				<li>mobile + metaverse game</li>
			</ul>

			<h1>[TIMELINE GRAPHIC]</h1>
		</Content>
	</div>

	<DashedStripe />

	<div class="section-team">
		<Content>
			<h1>THE TEAM</h1>

			<div class="team-grid-top">
				<div class="teammate">
					<img src="/sample.gif" />
					<p>Zaid | Lead</p>
				</div>

				<div class="teammate">
					<img src="/sample.gif" />
					<p>Andres | Tech</p>
				</div>
			</div>

			<Spacer height="16px" />

			<div class="team-grid-bottom">
				<div class="teammate">
					<img src="/sample.gif" />
					<p>Ben | Art</p>
				</div>

				<div class="teammate">
					<img src="/sample.gif" />
					<p>Ben | Art</p>
				</div>

				<div class="teammate">
					<img src="/sample.gif" />
					<p>Ben | Art</p>
				</div>
			</div>
		</Content>
	</div>
</div>

<div class="section-investors">
	<Content>
		<h1>Investors</h1>

		<Spacer height="32px" />

		<div class="row">
			<img src="/twitter.png" />
			<img src="/discord.png" />
			<img src="/twitter.png" />
		</div>

		<Spacer height="32px" />
	</Content>
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
		background: linear-gradient(-20deg, #431044, #8a0205, #073c8a, #028d3a);
	}

	.section-racers {
		// background: linear-gradient(221.85deg, #028d3a 31.76%, #108cd1 100%);
	}

	.section-team {
		// background: red;

		.team-grid-bottom {
			// display: grid;
			// grid-template-rows: repeat(1, 1fr);
			// grid-template-columns: repeat(3, 1fr);

			display: flex;
			flex-flow: row wrap;
			justify-content: space-evenly;
			gap: 16px;
		}

		.team-grid-top {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-evenly;
			gap: 16px;
		}

		.teammate {
			img {
				min-width: 160px;
				max-width: min(20vw, 256px);

				border: 6px solid white;
				border-radius: 50%;

				box-shadow: 0px 1px 6px 2px #00000044;
			}

			p {
				text-align: center;
				font-size: x-large;
				font-weight: 600;
				margin: 8px 0 0 0;
			}
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
