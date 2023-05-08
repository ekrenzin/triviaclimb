<script>
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero" id="hero">
	<h1 class="gradient-text">Welcome!</h1>
	<p> To track your score, you need be signed into an account.</p>
	<h2>Enter your email:</h2>
	<Auth
		supabaseClient={data.supabase}
		view="magic_link"
		redirectTo={`${data.url}/logging-in?redirect=/`}
		showLinks={false}
		appearance={{ theme: ThemeSupa, style: { input: 'color: #fff', button: "background: black; border: none"  } }}
	/>


</section>

<style>

	section {
	  width: 1200px;
	  max-width: 100%;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
