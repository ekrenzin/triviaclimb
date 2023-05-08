import { redirect } from '@sveltejs/kit';

export const load = async ({ url, locals: { getSession } }) => {
	const session = await getSession();

    // if the user is already logged in return them to the account page
	if (session) {
        console.log("session exists")
		throw redirect(303, '/trivia');
	}

	return { url: url.origin };
};