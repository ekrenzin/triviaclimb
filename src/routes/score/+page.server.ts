export const load = async ({ url, locals: { supabase, getSession } }) => {
  try {
    const session = await getSession();
    const uid = session?.user.id as string;
    const { data, error } = await supabase
      .from("scores")
      .select("*")
      .eq("uid", uid)
      .single();
    if (!data) throw new Error("No data returned from Supabase");
    //get the top 100 scores
    const { data: topScores, error: topScoresError } = await supabase
      .from("scores")
      .select("*")
      .order("rating", { ascending: false })
      .limit(100);
    if (!topScores) throw new Error("No data returned from Supabase");
    
    return {
      triviascore: data as TriviaScore,
      topScores: topScores as TriviaScore[],
    };
  } catch (error: any) {
    console.error(`Error retrieving TriviaScore: ${error.message}`);
    return {
      triviaScore: {
        uid: "",
        rating: 0,
        trivia: [],
      },
      topScores: [],
    };
  }
};
