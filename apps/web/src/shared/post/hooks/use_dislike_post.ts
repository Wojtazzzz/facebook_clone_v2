import { useMutation } from '@/hooks/use_mutation';
import { dislikeAction } from '../utils/dislike_action';

export const useDislikePost = () => {
    const { mutate, error, isPending } = useMutation({
        mutationFn: dislikeAction,
        onSuccess: () => {
            // 
        },
    });

    const dislike = (postId: number) => {
        mutate({ 
            postId
        });
    };

    return {
        dislike,
        error,
        isPending,
    };
};
