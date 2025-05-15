import AuthNavBar from "../../_components/auth/AuthNavBar";
import { AuthLayout } from "../../_components/auth/layout";
import LoginForm from "../../_components/auth/LoginForm";

const Page = () => {
	return (
		<AuthLayout>
			<AuthNavBar atLogin={true} />
			<div className="bg-gray-100 w-full h-screen flex justify-center pt-3">
				<LoginForm />
			</div>
		</AuthLayout>
	);
};

export default Page;
