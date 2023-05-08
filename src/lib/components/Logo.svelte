<script lang="ts">
    import ColoredWord from './ColoredWord.svelte';
    export let scale: number = 1;

    const colors: string[] = [
        "#3498db",
        '#e74c3c',
        "#2ecc71",
        "#f1c40f"
    ]
</script>

<div class="flex-row"  >
    <ColoredWord word="Trivia" colors="{colors}" {scale}/>
    <div style="width: {scale/3}rem" />
    <ColoredWord word="Climb" colors="{colors}" {scale}/>
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
