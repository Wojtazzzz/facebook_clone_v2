import { useMutation } from '@/hooks/use_mutation';
import { useRouter } from 'next/navigation';

type LoginPayload = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const router = useRouter();

	const { mutate } = useMutation({
		endpoint: '/users/login',
		method: 'POST',
		onSuccess: () => {
			router.replace('/');
		},
	});

	const login = (data: LoginPayload) => {
		mutate({
			user: {
				email: data.email,
				password: data.password,
			},
		});
	};

	return {
		login,
	};
};
