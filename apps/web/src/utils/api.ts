import wretch from 'wretch';

export const api = (authToken?: string) => {
	return wretch(process.env.NEXT_PUBLIC_API_URL, {
		mode: 'cors',
		credentials: 'include',
	}).headers({
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + (authToken ?? ''),
	});
};
