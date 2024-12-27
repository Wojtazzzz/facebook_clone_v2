import { useMutation } from '@/hooks/use_mutation';
import { logoutAction } from '@/utils/logout_action';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
	const router = useRouter();

	const { mutate, error, isPending } = useMutation({
		mutationFn: logoutAction,
		onSuccess: () => {
			router.replace('/login');
		},
	});

	const logout = () => {
		mutate({});
	};

	return {
		logout,
		error,
		isPending,
	};
};
