'use client';

import { type ElementType } from 'react';

type IconButtonProps = {
	type: 'button' | 'submit' | 'reset';
	icon: ElementType;
	ariaLabel: string;
	disabled?: boolean;
	onClick?: () => void;
};

export const IconButton = ({
	type,
	icon: Icon,
	ariaLabel,
	disabled,
	onClick,
}: IconButtonProps) => {
	return (
		<button
			type={type}
			aria-label={ariaLabel}
			className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#333334] text-white"
			disabled={disabled}
			onClick={onClick}
		>
			<Icon size={20} />
		</button>
	);
};
