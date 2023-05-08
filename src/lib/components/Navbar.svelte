<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import Logo from "./Logo.svelte";

  let userData = {};

  let menuOpen = false;

  let links = [
    {
      href: "/trivia",
      name: "Trivia",
      icon: null,
    },
    {
      href: "/score",
      name: "Score",
      icon: null,
    },
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:body on:pointerdown={() => (menuOpen = false)} />

<div
  class="flex-column nav-wrapper"
  id="mobile-menu"
  class:solid={menuOpen}
  on:pointerdown={(e) => e.stopPropagation()}
  out:fade
>
  <div class="flex-row top">
    <Logo />
    <button on:click={toggleMenu}>
      {#if menuOpen}
        <svg
          class="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#6a85b6"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      {:else}
        <svg
          width="23"
          height="19"
          viewBox="0 0 23 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22.5" height="3.16667" rx="1.58333" fill="#6a85b6" />
          <rect
            y="7.9165"
            width="22.5"
            height="3.16667"
            rx="1.58333"
            fill="#6a85b6"
          />
          <rect
            x="10"
            y="15.8335"
            width="12.5"
            height="3.16667"
            rx="1.58333"
            fill="#6a85b6"
          />
        </svg>
      {/if}
    </button>
  </div>
  {#if menuOpen}
    <div in:slide class="slide-content">
      <div class="links flex-column">
        {#each links as link}
          <a href={`${link.href}`} class="row">
            {link.name}
          </a>
        {/each}
      </div>
      <hr />
      <div class="account flex-column">
        <div class="flex-row bottom">
          <div class="flex-row">
            <a href="/account">
              <!-- <ProfileImageBubble pictureSize="45px" /> -->
              Account Page
            </a>
            <div class="flex-column user" />
          </div>
          <!-- <SignOutButton /> -->
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  h3 {
    margin: 0;
  }
  .solid {
    background-color: var(--bg-color);
    border-bottom: 2px solid var(--secondary-bg-color);
  }
  .nav-wrapper {
    position: relative;
    color: black;
    display: flex;
    padding: 10px 20px;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  .row {
    padding: 10px 20px 10px 20px;
    margin: 5px 0px 5px 0px;
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-align: left;
    text-transform: capitalize;
    border-radius: 10px;
  }
  .row:hover {
    filter: brightness(0.6);
  }

  .top {
    justify-content: space-between;
    align-items: center;
  }

  svg {
    height: 30px;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .account {
    margin-top: 20px;
  }

  hr {
    height: 0.5px;
  }

  .slide-content {
    max-height: calc(100vh - 70px);
    overflow: auto;
  }
  .bottom {
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

</style>
