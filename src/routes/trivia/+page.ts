/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
    const url = "http://44.226.228.62:8080/api/trivia";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        method: "question",
      }),
    });
    const data = await res.json();
    const result = data;
    console.log(result)
  
    let text = {
      title: "Trivia",
      description: `Welcome to trivia`,
    };
  
    return { text, question: {
  
    } };
  }
  