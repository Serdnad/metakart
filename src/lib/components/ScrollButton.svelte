<script lang="ts">
	function scrollDown() {
		const item = document.getElementById('main')
		item.scrollIntoView({
			behavior: 'smooth'
		})
	}
</script>

<div on:click={scrollDown}>
	<img src="/down.png" alt="scroll down" />
</div>

<style lang="scss">
	div {
		cursor: pointer;
		transition: all 0.5s;
		animation: bounce 1.5s infinite ease-in-out alternate;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		margin: auto;
		top: -96px;
		margin-bottom: -64px;

		height: 48px;
		width: 48px;
		background: #bbbbbb88;
		border-radius: 24px;

		box-shadow: 0 0 1px 2px #00000022;

		&:hover {
			background: #777777aa;
		}
	}

	img {
		width: 24px;
		height: 24px;
	}

	@keyframes bounce {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(16px);
		}
	}
</style>
