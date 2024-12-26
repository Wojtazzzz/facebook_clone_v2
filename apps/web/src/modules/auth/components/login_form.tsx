'use client';

import { Alert } from '@/components/alert';
import { Button } from '@/components/button';
import { FormGroup } from '@/components/form/form_group';
import { InputText } from '@/components/form/input_text';
import { useLogin } from '@/modules/auth/hooks/use_login';
import { type FormEvent, useState } from 'react';

export const LoginForm = () => {
	const { login, error } = useLogin();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();

		login({
			email,
			password,
		});
	};

	return (
		<div className="space-y-8">
			<Alert>{error && error.message}</Alert>

			<form onSubmit={onSubmit}>
				<FormGroup>
					<InputText
						type="email"
						name="email"
						value={email}
						setValue={setEmail}
						ariaLabel="E-mail"
						placeholder="E-mail"
					/>
				</FormGroup>
				<FormGroup>
					<InputText
						type="password"
						name="password"
						value={password}
						setValue={setPassword}
						ariaLabel="Password"
						placeholder="Password"
					/>
				</FormGroup>
				<Button type="submit">Log in</Button>
			</form>
		</div>
	);
};
