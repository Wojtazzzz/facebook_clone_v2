type FetchDataArgs = {
	method: 'POST' | 'GET' | 'PUT' | 'DELETE';
	endpoint: string;
	payload?: object;
};

export const fetchData = async ({
	method,
	endpoint,
	payload,
}: FetchDataArgs) => {
	return await fetch(process.env.NEXT_PUBLIC_API_URL + endpoint, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
};
