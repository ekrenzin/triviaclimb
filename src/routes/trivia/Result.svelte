<script lang="ts">
  import { goto } from "$app/navigation";
  import { User } from "$lib/Store";
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

  $: if (result) {
    showResult = true;
  }
</script>

{#if result && triviaQuestion}
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
          Show Info
        </button>
      {#if showHint}
        <p class="hint">{triviaQuestion.context}</p>
        {/if}
      {#if $User}
      <div class="signed-in">
        <p>
          Thank you for playing, <b>{$User.email}</b>! Your result has been submitted.
        </p>
        <p>
          Your rating is now <b>{result.score.rating}</b>
        </p>
        <p>
          You have answered <b>{result.score.correct}</b> questions correctly and <b>{result.score.incorrect}</b> questions incorrectly.
        </p>
      </div>
      {:else}
        <p>Sign in to submit your result and track your progress!</p>
        <div class="center">
          <button on:click={() => goto("/account")} class="anchor-button">Sign in</button>
        </div>
      {/if}
    </div>
  </Modal>
{/if}

<style>
  h1 {
    margin: 0;
  }
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
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    transition: 0.5s;
    color: white;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  .info:hover {
    filter: brightness(0.9);
  }

  .signed-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .signed-in p {
    margin: 0;
  }

  .hint {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    font-size: 0.75rem;
    border-radius: 10px;
    margin: 10px;
  }
</style>
