import AuthNavBar from "../../_component/auth/AuthNavBar";
import { AuthLayout } from "../../_component/auth/layout";
import LoginForm from "../../_component/auth/LoginForm";

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
