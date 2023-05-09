<script lang="ts">
  import type { PageData } from "./$types";
  import Result from "./Result.svelte";
  import Question from "./Question.svelte";
  import Categories from "./Categories.svelte";
  import { SelectedFormattedCategory } from "$lib/Store";

	export let data;
  let result: TriviaResult | null;
  let triviaQuestion: TriviaQuestion | null;
  let loadNewQuestion: () => Promise<void>;
  
  function handleMessage(e: CustomEvent) {
    loadNewQuestion();
  }
</script>

<section>
  <Question bind:triviaQuestion bind:result bind:loadNewQuestion />
  {#if result}
    <Result bind:triviaQuestion bind:result on:dismiss={handleMessage} />
  {/if}
</section>
<section>
  <Categories />
</section>

<style>
</style>
