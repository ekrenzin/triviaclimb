<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import "./styles.css";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";
  import { User } from "$lib/Store";

  export let data: LayoutData;

  $: ({ supabase, session } = data);
  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
      if (_session && _session.user) {
        const usr = _session.user;
        User.set(usr);
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<div class="bg"/>
<AudioPlayer />
<div class="app">
  <Navbar />
  <main>
    <slot />
  </main>
</div>

<style>
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-image: url("$lib/assets/bg2.png"); */
    z-index: -1;
    opacity: 0.01;
    animation: bg 10s ease-in-out infinite alternate;
    transform: scale(1.5);
  }

  @keyframes bg {
    0% {
      opacity: 0.1;
      transform: rotate(0deg);
    }
    100% {
      opacity: 0.2;
      transform: rotate(360deg);
    }
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: var(--color-theme-1);
  }

  main {
    padding: 1rem;
    flex: 1;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
  }

</style>
