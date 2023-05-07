<script lang="ts">
  import { SelectedCategory } from "$lib/Store";
  import { onMount } from "svelte";

  let categories: string[] = [];

  async function loadCategories() {
    try {
      const res = await fetch("/api/trivia", {
        method: "POST",
        body: JSON.stringify({ method: "categories" }),
      });
      categories = await res.json();
    } catch (e) {
      console.error(e);
    }
  }

  function selectCategory(category: string) {
    SelectedCategory.set(category);
  }

  onMount(loadCategories);
</script>

<details>
    <summary>Categories</summary>
{#each categories as category}
  <button class="category" on:click={() => selectCategory(category)}>
    {category}
  </button>
{/each}
</details>