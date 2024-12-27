export const Search = () => {
	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Search Facebook"
				className="h-10 rounded-full bg-gray-100 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<svg
				className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</div>
	);
};
