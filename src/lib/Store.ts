import { writable, derived } from "svelte/store";
import { formatCategoryText } from "$lib/utils";

export const SelectedCategory = writable("Random");
export const SelectedFormattedCategory = derived(
  SelectedCategory,
  ($SelectedCategory) => formatCategoryText($SelectedCategory)
);
