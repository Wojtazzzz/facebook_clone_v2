import { CommentIcon } from '@/components/icons/comment_icon';
import { LikeIcon } from '@/components/icons/like_icon';
import { ShareIcon } from '@/components/icons/share_icon';
import { Avatar } from '@/components/ui/avatar';
import moment from 'moment';
import { LikeButton } from './like_button';
import Link from 'next/link';

type PostProps = {
	post: {
		id: number;
		content: string;
		is_liked: boolean;
		inserted_at: string;
		user: {
			id: number;
			image_url: string | null;
			first_name: string;
			last_name: string;
		};
	};
};

export const Post = ({ post }: PostProps) => {
	return (
		<article className="w-full mx-auto bg-bg-secondary rounded-lg shadow-sm">
			{/* Header */}
			<header className="p-4 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Link href={`/profile/${post.user.id}`}>
						<Avatar
							src={post.user.image_url}
							alt={`${post.user.first_name} ${post.user.last_name}`}
							size="sm"
						/>
					</Link>
					<div>
						<Link href={`/profile/${post.user.id}`}>
							<h3 className="font-semibold text-[15px] text-gray-100">
								{post.user.first_name +
									' ' +
									post.user.last_name}
							</h3>
						</Link>
						<p className="text-sm text-gray-400">
							{moment(post.inserted_at).fromNow()}
						</p>
					</div>
				</div>
				<button className="text-gray-500">
					{/* <MoreHorizontal className="h-5 w-5" /> */}
				</button>
			</header>

			{/* Content */}
			<div className="px-4 pb-3">
				<p className="text-[15px] text-gray-100">{post.content}</p>
			</div>

			{/* Image */}
			<div className="bg-gray-100 aspect-video flex items-center justify-center border-y">
				<div className="w-20 h-20 text-gray-400">
					<img
						src="/placeholder.svg?height=80&width=80"
						alt="Post content"
						className="w-full h-full opacity-50"
					/>
				</div>
			</div>

			{/* Reactions */}
			<div className="px-4 py-2 flex items-center gap-x-2 border-b">
				<span className="flex items-center w-4 h-4 text-[#0866ff]">
					<LikeIcon size={20} />
				</span>
				<span className="text-sm text-gray-400">12</span>
			</div>

			{/* Actions */}
			<div className="px-2 py-2 flex items-center justify-between">
				<LikeButton postId={post.id} isLiked={post.is_liked} />

				<button className="flex-1 flex items-center justify-center gap-x-2 py-1.5 text-gray-400 rounded-md hover:bg-bg-accent">
					<CommentIcon size={18} />
					<span>Comment</span>
				</button>
				<button className="flex-1 flex items-center justify-center gap-x-2 py-1.5 text-gray-400 rounded-md hover:bg-bg-accent">
					<ShareIcon size={18} />
					<span>Share</span>
				</button>
			</div>
		</article>
	);
};
