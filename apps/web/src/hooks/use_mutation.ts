import { useMutation as useMutationRQ } from '@tanstack/react-query';

type UseMutationArgs<TPayload> = {
	onSuccess?: () => void;
	mutationFn: (payload: TPayload) => Promise<void>;
};

export const useMutation = <TPayload>({
	onSuccess,
	mutationFn,
}: UseMutationArgs<TPayload>) => {
	return useMutationRQ({
		mutationFn,
		onSuccess,
	});
};
