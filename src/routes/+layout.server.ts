// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export const load = async ({ url, locals: { getSession } }) => {
	const session = await getSession();
    const validPaths = [
        '/trivia',
        "/login"
    ]
    const isValidPath = validPaths.includes(url.pathname)

	if (!session && !isValidPath) {
		throw redirect(303, '/login');
	}

    if (session && url.pathname === "/login") {
        throw redirect(303, '/trivia');
    }

	return { url: url.origin };
};