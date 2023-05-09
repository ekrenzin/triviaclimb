<script lang="ts">
  export let data;

  let triviascore: TriviaScore | null;

  if (data && data.triviascore) {
    triviascore = data.triviascore;
  } else {
    triviascore = null;
  }
</script>

<section>
  <h1>score</h1>
  <p><strong>Correct:</strong> {triviascore.correct}</p>
  <p><strong>Incorrect:</strong> {triviascore.incorrect}</p>
  <p><strong>Total:</strong> {triviascore.total}</p>
  <p><strong>Rating:</strong> {triviascore.rating}</p>
  <p><strong>Correct Streak:</strong> {triviascore.correctStreak}</p>
  <p><strong>Incorrect Streak:</strong> {triviascore.incorrectStreak}</p>
  <p><strong>Streak Type:</strong> {triviascore.streakType > 0 ? "Win!" : "Loss."}</p>
</section>
