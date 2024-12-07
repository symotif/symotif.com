<script>
	import '../app.css';
</script>

<div class="scene">
	<slot />
</div>

<style>
	.scene {
		margin: 0;
		height: 100vh;
		background: radial-gradient(
			circle,
			rgba(38, 84, 38, 1) 0%,
			rgba(19, 42, 19, 1) 100%,
			rgba(38, 84, 38, 1) 100%
		);
		background-size: 100% 100%;
        background-position: center;
		animation: waveEffect 5s ease infinite;
    }

	@keyframes waveEffect {
		0% {
			background-size: 600% 600%;
		}
		50% {
			background-size: 100% 100%;
		}
		100% {
			background-size: 600% 600%;
		}
	}
	
	@keyframes waveEffect2 {
		0% {
			background-size: 100% 100%;
		}
        25% {
			background-size: 200% 200%;
		}
		50% {
			background-size: 4000% 4000%;
		}
        75% {
			background-size: 200% 200%;
		}
		100% {
			background-size: 100% 100%;
		}
	}
</style>
