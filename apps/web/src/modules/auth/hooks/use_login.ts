import { useMutation } from '@/hooks/use_mutation';
import { useRouter } from 'next/navigation';
import { loginAction } from '../utils/login_action';

type LoginPayload = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const router = useRouter();

	const { mutate, error } = useMutation({
		mutationFn: loginAction,
		onSuccess: () => {
			router.replace('/');
		},
	});

	const login = (data: LoginPayload) => {
		mutate({
			email: data.email,
			password: data.password,
		});
	};

	return {
		login,
		error,
	};
};
