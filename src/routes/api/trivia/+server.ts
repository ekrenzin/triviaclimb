import { getQuestion, postAnswer } from './trivia.js';

export async function POST({ request }) {
  const body = await request.json();
  const { method } = body;
  let response: Response;
  if (method === 'question') {
    const question = await getQuestion();
    response = new Response(JSON.stringify(question), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } else if (method === 'answer') {
    const { answer, question } = body;
    const result = await postAnswer(answer, question);
    response= new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    response = new Response(JSON.stringify({ error: 'Invalid method' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return response;
}
