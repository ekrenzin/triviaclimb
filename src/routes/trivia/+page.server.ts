import type { PageServerLoad, Actions } from "./$types";

export const load = (async ({ cookies }) => {
  let text = {
    title: "Trivia",
    description: `Welcome to trivia!`,
  };
  

  return { text };
}) satisfies PageServerLoad;
