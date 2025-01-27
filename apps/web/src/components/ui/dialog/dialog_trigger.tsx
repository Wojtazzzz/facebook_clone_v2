'use client';

import { Trigger } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';

type DialogTriggerProps = {
	children: ReactNode;
};

export const DialogTrigger = ({ children }: DialogTriggerProps) => {
	return <Trigger asChild>{children}</Trigger>;
};
