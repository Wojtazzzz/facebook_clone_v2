import { api } from '@/utils/api';
import { useMutation as useMutationRQ } from '@tanstack/react-query';

type MutationMethod = 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type UseMutationArgs = {
	endpoint: string;
	method: MutationMethod;
	onSuccess?: () => void;
};

export const useMutation = ({
	endpoint,
	method,
	onSuccess,
}: UseMutationArgs) => {
	return useMutationRQ({
		mutationFn: async (payload?: object) => {
			return await api()
				.url(endpoint)
				.json(payload ?? {})
				[method.toLocaleLowerCase() as Lowercase<MutationMethod>]()
				.json();
		},
		onSuccess: onSuccess,
	});
};
