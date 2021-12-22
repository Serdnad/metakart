<script>
	import SectionTitle from '../common/SectionTitle.svelte'
	import Spacer from '../common/Spacer.svelte'
	import Content from '../layout/Content.svelte'
</script>

<div class="container">
	<Content>
		<SectionTitle title="TEAM" color="#01ABE8" />

		<div class="team-grid">
			<div class="teammate">
				<img src="/placeholder.png" />
				<p>ZAID ABDUL-HADI</p>
			</div>

			<div class="teammate">
				<img src="/placeholder.png" />
				<p>ANDREW WATTS</p>
			</div>

			<div class="teammate">
				<img src="/placeholder.png" />
				<p>ANDRES GUTIERREZ</p>
			</div>

			<div class="teammate">
				<img src="/placeholder.png" />
				<p>HASAN ABDU-HADI</p>
			</div>

			<div class="teammate">
				<img src="/placeholder.png" />
				<p>ABDULQUDUS TAHLIL</p>
			</div>

			<div class="teammate">
				<img src="/placeholder.png" />
				<p>ANAV BATRA</p>
			</div>
		</div>

		<Spacer height="16px" />

		<div class="team-grid-bottom" />
	</Content>
</div>

<style lang="scss">
	.container {
		background: white;
	}

	.team-grid {
		display: grid;
		grid-template-rows: repeat(auto-fill, minmax(30%, 1fr));
		grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
		gap: 32px;
	}

	.teammate {
		img {
			width: 100%;
			height: 100%;
			// min-width: 160px;
			// max-width: min(20vw, 256px);

			// border: 6px solid white;
			border-radius: 32px;

			// box-shadow: 0px 0px 3px 1px #33333333;
		}

		p {
			font-size: x-large;
			font-weight: 600;
			margin: 8px 0 0 0;

			position: relative;
			top: -32px;
			left: 32px;
			margin-top: -32px;
		}
	}
</style>
