<script lang="ts">
  import { onMount } from "svelte";

  export let triviaQuestion: TriviaQuestion | null;
  export let result: TriviaResult | null;

  async function submit(choice: string) {
    if (!triviaQuestion) return;
    try {
      const body = {
        question: triviaQuestion.id,
        answer: choice,
        method: "answer",
      };
      const res = await fetch("/api/trivia", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      result = data.result;
    } catch (e) {
      console.error(e);
    }
  }

  async function loadNewQuestion() {
    triviaQuestion = null;
    result = null;
    try {
      const res = await fetch("/api/trivia", {
        method: "POST",
        body: JSON.stringify({ method: "question" }),
      });
      triviaQuestion = await res.json();
    } catch (e) {
      console.error(e);
      setTimeout(loadNewQuestion, 1000);
    }
  }

  onMount(loadNewQuestion);
</script>

{#if triviaQuestion}
  <div class="container">
    <h1>{triviaQuestion.question}</h1>
    <ol>
      {#each triviaQuestion.choices as choice}
        <button on:click={() => submit(choice)}>{choice}</button>
      {/each}
    </ol>
    <button on:click={loadNewQuestion}>Load New Question</button>
  </div>
{:else}
  <p>Loading...</p>
{/if}
