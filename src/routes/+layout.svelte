<script lang="ts">
  import Header from "./Header.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import AudioPlayer from "$lib/components/AudioPlayer.svelte";
  import "./styles.css";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";
  import Logo from "$lib/components/Logo.svelte";
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

<AudioPlayer />
<div class="app">
  <Navbar />
  <div class="center" style="margin-top: 3rem">
    <Logo scale={4} />
  </div>
  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  main {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    align-items: center;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
