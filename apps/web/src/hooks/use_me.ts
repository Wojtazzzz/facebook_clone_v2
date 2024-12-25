import { api } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useMe = () => {
	const { isLoading, isError, isSuccess } = useQuery({
		queryKey: ['me'],
		queryFn: async () => {
			return await api()
				.get('/users/me')
				.unauthorized(() => {
					throw new Error('Unauthorized.');
				})
				.json();
		},
	});

	return {
		isLoading,
		isError,
		isLoggedIn: isSuccess && !isError && !isLoading,
	};
};
