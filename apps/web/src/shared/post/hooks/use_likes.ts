import { useMutation } from '@/hooks/use_mutation';
import { likeAction } from '../utils/like_action';
import { useState } from 'react';

type UseLikesParams = {
    postId: number;
    isInitiallyLiked: boolean;
    initialLikes: number
}

export const useLikes = ({ postId, isInitiallyLiked, initialLikes }: UseLikesParams) => {
    const [isLiked, setIsLiked] = useState(isInitiallyLiked);
    const [likes, setLikes] = useState(initialLikes);

    const { mutate, error, isPending } = useMutation({
        mutationFn: likeAction,
        onSuccess: (post) => {
            setIsLiked(post.is_liked)
            setLikes(post.likes);
        },
    });

    const like = () => {
        mutate({
            postId,
            like: !isLiked
        });
    };

    return {
        likes,
        isLiked,
        like,
        error,
        isPending,
    };
};
