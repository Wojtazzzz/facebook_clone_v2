'use client';

import { LikeIcon } from '@/components/icons/like_icon';
import clsx from 'clsx';
import { useLikePost } from '../hooks/use_like_post';

type LikeButtonProps = {
	postId: number;
	isLiked: boolean;
};

export const LikeButton = ({
	postId,
	isLiked: isInitiallyLiked,
}: LikeButtonProps) => {
	const { like, isLiked } = useLikePost(postId, isInitiallyLiked);

	return (
		<button
			className="flex-1 flex items-center justify-center space-x-2 py-1.5 text-gray-400 rounded-md hover:bg-bg-accent"
			onClick={like}
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
