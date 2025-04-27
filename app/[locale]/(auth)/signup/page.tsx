import AuthNavBar from "../../_component/auth/AuthNavBar";
import SortedCountryDropdown from "../../_component/auth/CountryDropdown";
import { AuthLayout } from "../../_component/auth/layout";
import SignupForm from "../../_component/auth/SignupForm";
interface Country {
	code: string;
	commonName: string;
	officialName: string;
}

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
