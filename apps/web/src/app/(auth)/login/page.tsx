import { Button } from '@/components/button';
import { FormGroup } from '@/components/form/form_group';
import { InputText } from '@/components/form/input_text';

export default function LoginPage() {
	return (
		<>
			<form>
				<FormGroup>
					<InputText
						type="email"
						ariaLabel="E-mail"
						placeholder="E-mail"
					/>
				</FormGroup>
				<FormGroup>
					<InputText
						type="password"
						ariaLabel="Password"
						placeholder="Password"
					/>
				</FormGroup>
				<Button type="submit">Log in</Button>
			</form>
			<div className="text-center mt-2">
				<a href="#" className="text-gray-600 hover:underline">
					Forgotten account?
				</a>
			</div>
		</>
	);
}
