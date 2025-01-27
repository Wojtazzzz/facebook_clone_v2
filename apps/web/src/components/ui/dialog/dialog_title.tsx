'use client';

import { Title } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogTitleProps = {
	children: ReactNode;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
	return <Title>{children}</Title>;
};
