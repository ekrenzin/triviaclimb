<script lang="ts">
  export let result: TriviaResult | null;;
</script>

{#if result}
  <div class="result-container">
    <h2>Score</h2>
    <p>Correct: {result.score.correct}</p>
    <p>Incorrect: {result.score.incorrect}</p>
    <p>Rating: {result.score.rating}</p>
    <p>Total: {result.score.total}</p>
    <p class="streak {result.score.streakType === 0 ? 'correct' : 'incorrect'}">
      {result.score.streakType === 0 ? "Correct" : "Incorrect"} Streak: {result
        .score.streakType === 0
        ? result.score.correctStreak
        : result.score.incorrectStreak}
    </p>

    <h2>Answer</h2>
    <p class={result.correct ? "correct" : "incorrect"}>
      {result.correct ? "Correct" : "Incorrect"}: You answered "{result.answer}"
    </p>
  </div>
{/if}

<style>
  .result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    border-radius: 5px;
    padding: 20px;
  }

  .correct {
    color: #28a745;
  }

  .incorrect {
    color: #dc3545;
  }

  .streak {
    font-weight: bold;
  }
</style>
