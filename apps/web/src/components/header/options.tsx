'use client';

import { useLogout } from '@/hooks/use_logout';
import { IconButton } from '../ui/icon_button';
import { ExitIcon } from '../icons/exit_icon';
import { NotificationsIcon } from '../icons/notifications_icon';

export const Options = () => {
	const { logout, isPending } = useLogout();

	return (
		<div className="flex items-center gap-2">
			<div className="relative">
				<IconButton
					ariaLabel="Notifications"
					icon={NotificationsIcon}
					type="button"
				/>
				<span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
			</div>

			<IconButton
				ariaLabel="Log out"
				icon={ExitIcon}
				type="button"
				disabled={isPending}
				onClick={logout}
			/>
		</div>
	);
};
