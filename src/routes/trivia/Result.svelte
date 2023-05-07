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
  <div slot="body" class="result-container">
    <p class={result.correct ? "correct" : "incorrect"}>
      {result.correct ? "Correct" : "Incorrect"}: You answered "{result.answer}"
    </p>
    <button class="action-button" on:click={toggleHint}>Show Context</button>
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

</style>
