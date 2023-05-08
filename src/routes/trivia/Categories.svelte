<script lang="ts">
  import { SelectedCategory } from "$lib/Store";
  import { onMount } from "svelte";
  import Switch from "$lib/components/Switch.svelte";
import { formatCategoryText } from "$lib/utils";

  let showCategories = false;
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
<style>
  .flex-row {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .categories-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .category {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.5s;
  }

  .category:hover {
    background-color: #ccc;
  }
</style>

<div class="flex-row">
  <p>Show Category Selector?</p>
<Switch bind:checked={showCategories} />
</div>
{#if showCategories}
  <div class="categories">
    <h2>Categories</h2>
    <div class="categories-container">
      {#each categories as category}
        <button class="category" on:click={() => selectCategory(category)}>
          {formatCategoryText(category)}
        </button>
      {/each}
    </div>
  </div>
{/if}