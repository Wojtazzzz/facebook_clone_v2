'use client';

import { type ReactNode } from 'react';

type ButtonProps = {
	type: 'button' | 'submit' | 'reset';
	children: ReactNode;
};

export const Button = ({ type, children }: ButtonProps) => {
	return (
		<button
			type={type}
			className="w-full bg-[#0866ff] text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
		>
			{children}
		</button>
	);
};
