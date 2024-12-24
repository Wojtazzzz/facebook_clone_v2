type InputTextProps = {
	type: 'text' | 'password' | 'email';
	ariaLabel: string;
	placeholder: string;
};

export const InputText = ({ type, ariaLabel, placeholder }: InputTextProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			aria-label={ariaLabel}
			className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
		/>
	);
};
