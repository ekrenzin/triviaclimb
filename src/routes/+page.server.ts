import { redirect } from '@sveltejs/kit';

export const load = async ({ url, locals: { getSession } }) => {
		throw redirect(303, '/trivia');
};