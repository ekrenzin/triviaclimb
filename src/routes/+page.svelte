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
	<p> To track your score, you need be signed into an account.</p>
	<h2>Enter your email:</h2>
	<div class="center">
	<Auth
		supabaseClient={data.supabase}
		view="magic_link"
		redirectTo={`${data.url}/logging-in?redirect=/`}
		showLinks={false}
		appearance={{ theme: ThemeSupa, style: { input: 'color: #fff', button: "background: black; border: none", container: "width: 400px" } }}
	/>
</div>

	<p>or you can play without an account:</p>
	<div class="center">
		<a href="/trivia" class="anchor-button">Play</a>
	</div>

</section>

<style>

	section {
		width: 80%;
		margin: auto;
	  max-width: 1000px;
	}

	h2 {
		margin: 0;
	}
</style>
