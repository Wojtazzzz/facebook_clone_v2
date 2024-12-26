import { IconContainer } from './icon_container';

type TriangleDownIconProps = {
	size: number;
};

export const TriangleDownIcon = ({ size }: TriangleDownIconProps) => {
	return (
		<IconContainer>
			<svg
				width={size}
				height={size}
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
			</svg>
		</IconContainer>
	);
};
