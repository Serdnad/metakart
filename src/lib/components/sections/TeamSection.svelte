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
				<img src="/zaid.jpeg" />
				<p>ZAID ABDUL-HADI</p>
			</div>

			<div class="teammate">
				<img src="/andrew.jpeg" />
				<p>ANDREW WATTS</p>
			</div>

			<div class="teammate">
				<img src="/andres.jpeg" />
				<p>ANDRES GUTIERREZ</p>
			</div>

			<div class="teammate">
				<img src="/hasan.jpeg" />
				<p>HASAN ABDUL-HADI</p>
			</div>

			<div class="teammate">
				<img src="/abdulqudus.jpeg" />
				<p>ABDULQUDUS TAHLIL</p>
			</div>

			<div class="teammate">
				<img src="/anav.jpeg" />
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
		grid-template-rows: repeat(auto-fill, minmax(280px, 1fr));
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 32px;
	}

	.teammate {
		position: relative;
		border-radius: 32px;
		box-shadow: 0 0 3px 1px #11111144;

		img {
			width: 100%;
			height: 100%;

			border-radius: 32px;
		}

		p {
			font-size: x-large;
			font-weight: 600;
			margin: 8px 0 0 0;

			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 32px 32px 24px 32px;

			max-width: calc(100% - 64px);

			background: linear-gradient(transparent, #11111177);
			border-radius: 0 0 32px 32px;
		}
	}
</style>
