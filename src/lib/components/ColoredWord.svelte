<script lang="ts">
    export let word = '';
    export let colors: string[] = [];
    export let scale: number = 1;

  </script>
  
  <style>
    span {
      font-size: 24px;
      font-weight: bold;
    }
  </style>
  
  {#each word.split('') as letter, index}
    <div><span style="color: {colors[index % colors.length]}; font-size: {scale}rem">{letter}</span></div>
  {/each}