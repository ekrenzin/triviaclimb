export {
    getQuestion,
    postAnswer,
    getCategories
}

async function getQuestion(category?: string) {
  const url = "http://44.226.228.62:8080/api/trivia";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "question",
      category: (category === "Random" || category === undefined) ? null : category,
    }),
  });
  const result = await res.json();
  const triviaQuestion = result.question;

  return triviaQuestion;
}

async function postAnswer(answer: string, question: number) {
  const url = "http://44.226.228.62:8080/api/trivia";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "answer",
      answer: answer,
      question: question,
    }),
  });
  const result = await res.json();
  return result;
}

async function getCategories() {
  const url = "http://44.226.228.62:8080/api/trivia";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      method: "categories",
    }),
  });
  const result = await res.json();
  const triviaCategories = result.categories;

  return triviaCategories;
}