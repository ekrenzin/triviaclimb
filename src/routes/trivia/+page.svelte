<script lang="ts">
  import type { PageData } from "./$types";
  import Result from "./Result.svelte";
  import Question from "./Question.svelte";
  import Categories from "./Categories.svelte";
  import { SelectedCategory } from "$lib/Store";

  export let data: PageData;

  let result: TriviaResult;
  let triviaQuestion: TriviaQuestion;
</script>

<section class="hero" id="hero">
  <h1 class="gradient-text" data-text="Your Text Here">{data.text.title}</h1>
  <p>
    {data.text.description}
  </p>
  <p>You are playing in the {$SelectedCategory} category</p>
</section>
<Categories />
<Question bind:triviaQuestion bind:result />
{#if result}
  <Result bind:triviaQuestion bind:result />
{/if}

<style>
  h1 {
    font-size: 4rem;
    font-weight: 900;
    color: #333;
  }

  p {
    font-size: 1.4rem;
    color: #777;
    text-align: center;
  }
</style>
