'use client';

import { type ReactNode, JSX } from 'react';

type ButtonProps = {
	children: ReactNode;
} & JSX.IntrinsicElements['button'];

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className="w-full bg-[#0866ff] text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
		>
			{children}
		</button>
	);
};
