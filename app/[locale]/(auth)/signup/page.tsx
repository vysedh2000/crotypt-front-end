import AuthNavBar from "../../_components/auth/AuthNavBar";
import { AuthLayout } from "../../_components/auth/layout";
import SignupForm from "../../_components/auth/SignupForm";

const Page = () => {
	return (
		<AuthLayout>
			<AuthNavBar atLogin={false} />
			<div className="bg-gray-100 w-full flex h-screen justify-center pt-3">
				<SignupForm />
			</div>
		</AuthLayout>
	);
};

export default Page;
