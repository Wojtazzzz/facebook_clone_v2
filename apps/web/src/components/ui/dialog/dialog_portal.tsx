'use client';

import { Portal } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogPortalProps = {
	children: ReactNode;
};

export const DialogPortal = ({ children }: DialogPortalProps) => {
	return <Portal>{children}</Portal>;
};
