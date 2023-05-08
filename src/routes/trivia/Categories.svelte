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

<div class="flex-row">
  <p>Show Category Selector?</p>
  <Switch bind:checked={showCategories} />
</div>
{#if showCategories}
  <div class="categories">
    <div class="categories-container">
      {#each categories as category}
        <button class="category" on:click={() => selectCategory(category)}>
          {formatCategoryText(category)}
        </button>
      {/each}
    </div>
  </div>
{/if}

<style>
  .flex-row {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .categories-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .category {
    width: 100%;
    cursor: pointer;
  }
</style>
