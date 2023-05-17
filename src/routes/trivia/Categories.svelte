<script lang="ts">
  import { slide } from "svelte/transition";
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

<section>
  <div class="flex-row">
    <p>Show Category Selector?</p>
    <Switch bind:checked={showCategories} />
  </div>
  {#if showCategories}
    <div class="categories" in:slide out:slide>
      <div class="categories-container">
        {#each categories as category}
          <button class="category" on:click={() => selectCategory(category)}>
            {formatCategoryText(category)}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  section {
    transition: 0.5s;
  }
  .flex-row {
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .categories-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 150px);
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .category {
    cursor: pointer;
    height: 100%;
    background-color: transparent;
    border-radius: 0.25rem;
    transition: 0.5s;
    border: 3px solid;
  }

  .category:hover {
    background-color: rgb(200, 230, 250);
  }
</style>
