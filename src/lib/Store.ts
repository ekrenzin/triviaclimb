import { writable, derived } from "svelte/store";
import { formatCategoryText } from "$lib/utils";

export const SelectedCategory = writable("Random");
export const SelectedFormattedCategory = derived(
  SelectedCategory,
  ($SelectedCategory) => formatCategoryText($SelectedCategory)
);
export const AudioQueue = writable([]);
export const AudioPlay = writable()
export const User = writable();