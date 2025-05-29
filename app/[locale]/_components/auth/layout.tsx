export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<header></header>
			<main>{children}</main>
		</div>
	);
};
