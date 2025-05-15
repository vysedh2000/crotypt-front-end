import AuthNavBar from "../../_components/auth/AuthNavBar";
import SortedCountryDropdown from "../../_components/auth/CountryDropdown";
import { AuthLayout } from "../../_components/auth/layout";
import SignupForm from "../../_components/auth/SignupForm";
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
