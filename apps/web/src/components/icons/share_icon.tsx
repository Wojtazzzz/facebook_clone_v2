import { IconContainer } from './icon_container';

type ShareIconProps = {
	size: number;
};

export const ShareIcon = ({ size }: ShareIconProps) => {
	return (
		<IconContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 27"
				width={size}
				height={size}
			>
				<path
					fill="currentColor"
					d="M13 14h-2a9 9 0 0 0-7.968 4.81A10 10 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5zm-2-2h4v3.308L20.321 11L15 6.692V10h-2a7.98 7.98 0 0 0-6.057 2.774A11 11 0 0 1 11 12"
				></path>
			</svg>
		</IconContainer>
	);
};
