type InputTextProps = {
	type: 'text' | 'password' | 'email';
	name: string;
	ariaLabel: string;
	placeholder: string;
	value: string;
	setValue: (value: string) => void;
};

export const InputText = ({ type, name, ariaLabel, placeholder, value, setValue }: InputTextProps) => {
	return (
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			aria-label={ariaLabel}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
		/>
	);
};
