<script lang="ts">
  import { SelectedCategory, SelectedFormattedCategory } from "$lib/Store";
  import LoadingSpinner from "$lib/components/LoadingSpinner.svelte";
  import { onDestroy } from "svelte";
  import { AudioPlay } from "$lib/Store";

  export let triviaQuestion: TriviaQuestion | null;
  export let result: TriviaResult | null;

  let error: boolean = false;

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
      if (result.correct) {
        AudioPlay.set("correct_play")
      } else {
        AudioPlay.set("incorrect_play")
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function loadNewQuestion() {
    triviaQuestion = null;
    result = null;
    try {
      // AudioPlay.set("load_loop")
      const res = await fetch("/api/trivia", {
        method: "POST",
        body: JSON.stringify({ method: "question", category: $SelectedCategory }),
      });
      // AudioPlay.set("load_pause")
      
      triviaQuestion = await res.json();
    } catch (e) {
      console.error(e);
      error = true;
    }
  }

  function cleanChoice(choice: string) {
    //remove any trailing punctuation
    const cleanAnswer = choice.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    //remove any trailing whitespace
    return cleanAnswer.trim();

  }

  const categorySub = SelectedCategory.subscribe(loadNewQuestion);

  onDestroy(() => {
    categorySub();
  });
</script>

  <div class="container">
    {#if error}
    <h2>There was an error loading a question, try again?</h2>
    <button class="action-button" on:click={loadNewQuestion}>Load New Question</button>
    {:else if triviaQuestion}
    <h2>{triviaQuestion.question}</h2>
    <div class="choices">
      {#each triviaQuestion.choices as choice}
        <button class="choice" on:click={() => submit(choice)}>{cleanChoice(choice)}</button>
      {/each}
    </div>
    <button class="action-button" on:click={loadNewQuestion}>Load New Question</button>
    {:else}
    <LoadingSpinner text="Creating a New Question" subtext="You are playing in the {$SelectedFormattedCategory} category." />
    {/if}
  </div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .choices {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }

  .choice {
    background-color: #3498db;
    color: #ffffff;
    border: none;
    font-size: 1.5rem;
    padding: 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
    width: 100%;
  }

  .choice:hover {
    background-color: #2980b9;
  }

  .choice:nth-child(1) {
    background-color: #3498db;
  }

  .choice:nth-child(1):hover {
    background-color: #2980b9;
  }

  .choice:nth-child(2) {
    background-color: #e74c3c;
  }

  .choice:nth-child(2):hover {
    background-color: #c0392b;
  }

  .choice:nth-child(3) {
    background-color: #2ecc71;
  }

  .choice:nth-child(3):hover {
    background-color: #27ae60;
  }

  .choice:nth-child(4) {
    background-color: #f1c40f;
  }

  .choice:nth-child(4):hover {
    background-color: #f39c12;
  }
  .action-button {
    margin: auto;
    margin-top: 40px;
  }
  @media (max-width: 600px) {
    .choices {
      grid-template-columns: 1fr;
    }
  }
</style>
