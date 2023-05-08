<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";
  export let result: TriviaResult | null;
  export let triviaQuestion: TriviaQuestion | null;

  let showHint = false;
  let showResult = false;

  function toggleHint() {
    showHint = !showHint;
  }

  function hideResult() {
    showResult = false;
    result = null;
  }

  $: if (result) showResult = true;
</script>

{#if result}
  <Modal bind:showing={showResult} dismiss={hideResult}>
    <div slot="head" class="head">
      <h1 class={result.correct ? "correct" : "incorrect"}>
        {result.correct ? "Correct" : "Incorrect"}
      </h1>
    </div>
    <div slot="body" class="result-container">
      <p class={result.correct ? "correct" : "incorrect"}>
        You answered "{result.answer}"
      </p>
      <button class="info" on:click={toggleHint}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-info-circle"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 9h.01" />
          <path d="M11 12h1v4h1" />
        </svg>
      </button>
      {#if showHint && triviaQuestion}
        <p class="hint">{triviaQuestion.context}</p>
      {/if}
    </div>
  </Modal>
{/if}

<style>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .correct {
    color: #28a745;
  }

  .incorrect {
    color: #dc3545;
  }

  .info {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s;
  }

  .info:hover {
    transform: scale(1.1);
  }
</style>
