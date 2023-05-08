<script lang="ts">
    export let text: string;
    export let subtext: string;
</script>

{#if text}
<h2>{text}</h2>
<p>{subtext}</p>
{/if}
<div class="lds-hourglass" />

<style>
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  .lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    opacity: 1;
    filter: brightness(1.4);
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #000;
    border-color: var(--color-theme-1) var(--color-theme-2) var(--color-theme-3) var(--color-theme-4);
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
</style>
