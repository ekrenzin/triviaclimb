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
  }

  h3 {
    color: var(--color-theme-1)
  }

  span {
    color: var(--color-theme-2)
  }
</style>
