'use client';

import { useState, type ReactNode } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogRoot } from '@/components/ui/dialog/dialog_root';
import { DialogTrigger } from '@/components/ui/dialog/dialog_trigger';
import { DialogPortal } from '@/components/ui/dialog/dialog_portal';
import { DialogOverlay } from '@/components/ui/dialog/dialog_overlay';
import { DialogContent } from '@/components/ui/dialog/dialog_content';
import { DialogTitle } from '@/components/ui/dialog/dialog_title';

type CreatePostModalProps = {
	trigger: ReactNode;
	user: {
		id: number;
		first_name: string;
		last_name: string;
		image_url: string;
	};
};

export const CreatePostModal = ({ trigger, user }: CreatePostModalProps) => {
	const [value, setValue] = useState('');

	return (
		<DialogRoot>
			<DialogTrigger>{trigger}</DialogTrigger>
			<DialogPortal>
				<DialogOverlay>
					<DialogContent>
						<DialogTitle>Create Post</DialogTitle>

						<div className="px-4">
							<div className="mb-4 flex items-center space-x-4">
								<Avatar
									src={user.image_url}
									alt={user.first_name + ' ' + user.last_name}
									size="sm"
								/>

								<div>
									<h3 className="font-semibold">
										{user.first_name + ' ' + user.last_name}
									</h3>
								</div>
							</div>

							<form action="" className="space-y-4">
								<div className="relative">
									<div
										autoFocus
										contentEditable
										role="textbox"
										spellCheck
										aria-label={`What's on your mind, ${user.first_name}?`}
										aria-placeholder={`What's on your mind, ${user.first_name}?`}
										className="w-full px-4 text-lg py-2 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-300"
										onInput={(e) =>
											setValue(
												e.currentTarget.textContent ??
													'',
											)
										}
									/>

									{value.length <= 0 && (
										<div
											aria-hidden="true"
											className="pointer-events-none absolute top-0 left-0 w-full px-4 text-lg py-2 text-gray-300 bg-bg-accent rounded-xl"
										>
											What's on your mind,{' '}
											{user.first_name}?
										</div>
									)}
								</div>

								<Button>Post</Button>
							</form>
						</div>
					</DialogContent>
				</DialogOverlay>
			</DialogPortal>
		</DialogRoot>
	);
};
