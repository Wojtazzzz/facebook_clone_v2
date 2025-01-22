'use client';

import { LikeIcon } from '@/components/icons/like_icon';
import clsx from 'clsx';
import { useLikePost } from '../hooks/use_like_post';
import { useDislikePost } from '../hooks/use_dislike_post';

type LikeButtonProps = {
	postId: number;
	isLiked: boolean;
};

export const LikeButton = ({ postId, isLiked }: LikeButtonProps) => {
	const { like } = useLikePost();
	const { dislike } = useDislikePost();

	const handleClick = () => (isLiked ? dislike(postId) : like(postId));

	return (
		<button
			className="flex-1 flex items-center justify-center gap-x-2 py-1.5 text-gray-400 rounded-md hover:bg-bg-accent"
			onClick={handleClick}
		>
			<span
				className={clsx({
					'text-[#0866ff]': isLiked,
				})}
			>
				<LikeIcon size={18} />
			</span>
			<span>Like</span>
		</button>
	);
};
