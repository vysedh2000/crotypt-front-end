import AuthNavBar from "./AuthNavBar";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<header>
				<AuthNavBar />
			</header>
			<main>{children}</main>
		</div>
	);
};
