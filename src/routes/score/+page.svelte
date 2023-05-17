<script lang="ts">
  export let data;

  let triviascore: TriviaScore | null;
  let allScores: TriviaScore[] = [];

  if (data && data.triviascore) {
    triviascore = data.triviascore;
  } else {
    triviascore = null;
  }

  if (data && data.topScores) {
    allScores = data.topScores;
  }
</script>

<section>
  <h1>Trivia Rankings!</h1>
  <table>
    <thead>
      <tr>
        <th>Correct</th>
        <th>Incorrect</th>
        <th>Total</th>
        <th>Rating</th>
        <th>Correct Streak</th>
        <th>Incorrect Streak</th>
        <th>Streak Type</th>
      </tr>
    </thead>
    <tbody>
      {#each allScores as triviascore}
        <tr>
          <td>{triviascore.correct}</td>
          <td>{triviascore.incorrect}</td>
          <td>{triviascore.total}</td>
          <td>{triviascore.rating}</td>
          <td>{triviascore.correctStreak}</td>
          <td>{triviascore.incorrectStreak}</td>
          <td>{triviascore.streakType > 0 ? "Win!" : "Loss."}</td>
        </tr>
      {/each}
      <!-- The current user score -->
      <tr>
        <h3>Your Score:</h3>
      </tr>
      {#if triviascore}
        <tr class="your-score">
          <td>{triviascore.correct}</td>
          <td>{triviascore.incorrect}</td>
          <td>{triviascore.total}</td>
          <td>{triviascore.rating}</td>
          <td>{triviascore.correctStreak}</td>
          <td>{triviascore.incorrectStreak}</td>
          <td>{triviascore.streakType > 0 ? "Win!" : "Loss."}</td>
        </tr>
      {/if}
    </tbody>
  </table>
</section>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr, th, td {
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #e3e3e3;
    transition: 0.5s;
  }

  .your-score {
    font-weight: bold;
  }
</style>
