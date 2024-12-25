import { fetchData } from '@/utils/fetch_data';
import { useMutation as useMutationRQ } from '@tanstack/react-query';

type UseMutationArgs = {
	endpoint: string;
};

export const useMutation = ({ endpoint }: UseMutationArgs) => {
	return useMutationRQ({
		mutationFn: async (payload?: object) => {
			return await fetchData({
				method: 'POST',
				endpoint,
				payload,
			});
		},
	});
};
