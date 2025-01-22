import { useMutation } from '@/hooks/use_mutation';
import { likeAction } from '../utils/like_action';

export const useLikePost = () => {
    const { mutate, error, isPending } = useMutation({
        mutationFn: likeAction,
        onSuccess: () => {
            // 
        },
    });

    const like = (postId: number) => {
        mutate({ 
            postId
        });
    };

    return {
        like,
        error,
        isPending,
    };
};
