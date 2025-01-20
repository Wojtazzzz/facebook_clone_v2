import { IconContainer } from './icon_container';

type CommentIconProps = {
	size: number;
};

export const CommentIcon = ({ size }: CommentIconProps) => {
	return (
		<IconContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={size}
				height={size}
			>
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M7.09 2.75a4 4 0 0 0-4 4v6.208a4 4 0 0 0 4 4h.093v3.792a.5.5 0 0 0 .839.368l4.52-4.16h4.369a4 4 0 0 0 4-4V6.75a4 4 0 0 0-4-4z"
				></path>
			</svg>
		</IconContainer>
	);
};
