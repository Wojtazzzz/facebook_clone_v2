import { useMutation } from '@/hooks/use_mutation';
import { likeAction } from '../utils/like_action';
import { useState } from 'react';

export const useLikePost = (postId: number, initialLiked: boolean) => {
    const [isLiked, setIsLiked] = useState(initialLiked);

    const { mutate, error, isPending } = useMutation({
        mutationFn: likeAction,
        onSuccess: () => {
            setIsLiked((prev) => !prev)
        },
    });

    const like = () => {
        mutate({ 
            postId,
            like: !isLiked
        });
    };

    return {
        isLiked,
        like,
        error,
        isPending,
    };
};
