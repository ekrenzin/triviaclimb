<script lang="ts">
  import type { PageData } from "./$types";
  import Result from "./Result.svelte";
  import Question from "./Question.svelte";
  import Categories from "./Categories.svelte";
  import { SelectedFormattedCategory } from "$lib/Store";

	export let data;
  let result: TriviaResult;
  let triviaQuestion: TriviaQuestion;
</script>

<section>
  <Question bind:triviaQuestion bind:result />
  {#if result}
    <Result bind:triviaQuestion bind:result />
  {/if}
</section>
<section>
  <Categories />
</section>

<style>
</style>
