<script lang="ts">
  import { fade } from "svelte/transition";

  export let dismissable = true;
  export let showing = false,
    dismiss = () => {},
    noBG = false;

  function close(evt) {
    try {
      evt.stopPropagation();
    } catch (e) {
      console.log(e);
    }
    if (dismissable) {
      showing = false;
      dismiss();
    }
  }
</script>

{#if showing}
  <div class="modal-wrapper" transition:fade>
    {#if !noBG}
      <div class="backgroundOverlay" on:mousedown={close} />
    {/if}
    <div
      class="modal"
      on:click|preventDefault|stopPropagation
      on:contextmenu|preventDefault|stopPropagation
      on:keydown={() => {}}
    >
      {#if dismissable}
        <button class="close" on:click={close}>
            X
        </button>
      {/if}
      <div class="modal-content">
        <slot name="head" />
        <slot name="body" />
        <slot name="footer" />
      </div>
    </div>
  </div>
{/if}

<style>
  .head {
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
  }

  .body {
    font-size: 14px;
    line-height: 24px;
  }

  input:focus {
    outline: none;
  }

  /* mobile screensizes less padding */
  @media (max-width: 500px) {
    .body {
      padding-left: 0;
    }
  }

  .modal-wrapper {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: all;
  }

  .modal {
    background: white;
    border-radius: 0.5rem;
    width: 90%;
    max-width: 900px;
    max-height: 90%;
    overflow: visible;
    padding: 10px 20px;
    color: var(--color-text);
    font-style: normal;
    position: relative;
  }

  .backgroundOverlay {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: all;
    z-index: -1;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-color);
    border-radius: 3px;
  }

  .modal-content {
    overflow: auto;
    height: 100%;
    position: relative;
    padding: 10px 20px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    outline: none;
    border: none;
    filter: invert(1);
    opacity: 0.5;
    transition: 0.2s;
    z-index: 10;
    padding: 0;
    margin: 0;
    height: 15px;
    width: 15px;
  }

  .close img {
    height: 15px;
    width: 15px;
  }

  .close:hover {
    opacity: 0.7;
  }

  /* mobile screensizes less padding */
  @media (max-width: 500px) {
    .modal {
      padding: 10px;
    }

    .modal-content {
      padding: 0px;
    }
  }
</style>
