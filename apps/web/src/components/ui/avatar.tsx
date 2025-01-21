import clsx from 'clsx';
import Image from 'next/image';

type AvatarProps = {
	src: string | null;
	alt: string;
	size: 'sm' | 'md';
};

export const Avatar = ({ src, alt, size }: AvatarProps) => {
	return (
		<div
			className={clsx(
				'relative rounded-full border-4 border-gray-400 bg-gray-400 overflow-hidden',
				{
					'w-10 h-10': size === 'sm',
					'w-40 h-40': size === 'md',
				},
			)}
		>
			<Image
				src={src ?? '/empty-profile-picture.webp'}
				alt={alt}
				fill
				className="h-full w-full object-cover"
			/>
		</div>
	);
};
