import { LoginForm } from '@/modules/auth/components/login_form';

export default function LoginPage() {
	return (
		<>
			<LoginForm />
			
			<div className="text-center mt-2">
				<a href="#" className="text-gray-600 hover:underline">
					Forgotten account?
				</a>
			</div>
		</>
	);
}
