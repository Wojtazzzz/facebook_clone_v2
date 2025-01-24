import { type MutationFunction, useMutation as useMutationRQ } from '@tanstack/react-query';

type UseMutationArgs<TVariables, TResponse> = {
	onSuccess?: (data: TResponse, variables: TVariables, context: unknown) => void;
	mutationFn: MutationFunction<TResponse, TVariables>
};

export const useMutation = <TVariables, TResponse>({
	onSuccess,
	mutationFn,
}: UseMutationArgs<TVariables, TResponse>) => {
	return useMutationRQ<TResponse, Error, TVariables, {"p": "p"}>({
		mutationFn,
		onSuccess,
	});
};
