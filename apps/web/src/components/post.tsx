type PostProps = {
	post: {
		id: number;
		content: string;
		inserted_at: string;
		user: {
			id: number;
			image_url: string;
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
					<div className="w-10 h-10 rounded-full overflow-hidden">
						<img
							src={post.user.image_url}
							alt={post.user.first_name + post.user.last_name}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h3 className="font-semibold text-[15px] text-gray-100">
							{post.user.first_name} {post.user.last_name}
						</h3>
						<p className="text-sm text-gray-400">
							{post.inserted_at}
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
			<div className="px-4 py-2 flex items-center gap-1 border-b">
				<span className="inline-flex items-center justify-center w-4 h-4">
					❤️
				</span>
				<span className="text-sm text-gray-500">12</span>
			</div>

			{/* Actions */}
			<div className="px-2 py-1 flex items-center justify-between">
				<button className="flex-1 text-gray-600">
					<span className="mr-2">👍</span> Like
				</button>
				<button className="flex-1 text-gray-600">
					<span className="mr-2">👍</span> Like
					{/* <MessageSquare className="w-4 h-4 mr-2" /> Comment */}
				</button>
				<button className="flex-1 text-gray-600">
					<span className="mr-2">👍</span> Like
					{/* <Share2 className="w-4 h-4 mr-2" /> Share */}
				</button>
			</div>
		</article>
	);
};
