<script lang="ts">
    export let scale: number = 1;

</script>

<div class="flex-row" >
  <h3 style={`font-size: ${scale}rem`}>Trivia</h3>
  <span style={`font-size: ${scale}rem`}>Climb</span>
</div>

<style>
  .flex-row {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  h3 {
    color: var(--color-theme-1);
    margin: 0;
  }

  span {
    color: var(--color-theme-2);
    margin: 0;
  }
</style>
