import { type ReactNode } from 'react';

type FormGroupProps = {
	children: ReactNode;
};

export const FormGroup = ({ children }: FormGroupProps) => {
	return <div className="mb-4">{children}</div>;
};
