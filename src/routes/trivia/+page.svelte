<script lang="ts">
  import type { PageData } from "./$types";
  import Result from "./Result.svelte";
  import Question from "./Question.svelte";

  export let data: PageData;

  let result: TriviaResult;
  let triviaQuestion: TriviaQuestion;

</script>

<section class="hero" id="hero">
  <h1 class="gradient-text" data-text="Your Text Here">{data.text.title}</h1>
  <p>
    {data.text.description}
  </p>
</section>

<Question bind:triviaQuestion bind:result />
{#if result}
  <Result bind:result />
{/if}

<style>
  .container {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
    color: #333;
  }

  h2 {
    font-size: 20px;
    color: #555;
  }

  p {
    font-size: 16px;
    color: #777;
  }

  ol {
    list-style-position: inside;
  }
</style>
