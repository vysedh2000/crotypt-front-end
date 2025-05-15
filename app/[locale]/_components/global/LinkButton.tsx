import Link from "next/link";

const LinkButton = ({ name, route }: { name: string; route: string }) => {
	return (
		<div>
			<Link
				href={`${route}`}
				className="relative font-medium hover:text-blue-600 transition-colors duration-200
               after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0
               after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
				{name}
			</Link>
		</div>
	);
};

export default LinkButton;
