'use client';

import { Close } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogCloseProps = {
	children: ReactNode;
};

export const DialogClose = ({ children }: DialogCloseProps) => {
	return <Close asChild>{children}</Close>;
};
