'use client';

import { Title } from '@radix-ui/react-dialog';
import { type ReactNode } from 'react';
import { IconButton } from '../icon_button';
import { TimesIcon } from '@/components/icons/times_icon';
import { DialogClose } from './dialog_close';

type DialogTitleProps = {
	children: ReactNode;
};

export const DialogTitle = ({ children }: DialogTitleProps) => {
	return (
		<div className="flex items-center px-4 pb-4  border-b border-b-gray-500 text-xl font-semibold">
			<div className="w-1/3"></div>

			<div className="w-1/3 flex justify-center text-center">
				<Title>{children}</Title>
			</div>

			<div className="w-1/3 flex justify-end">
				<DialogClose>
					<IconButton
						type="button"
						icon={TimesIcon}
						ariaLabel="Close"
					/>
				</DialogClose>
			</div>
		</div>
	);
};
