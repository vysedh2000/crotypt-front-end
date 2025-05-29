"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { getToken } from "@/util/tokenUtil";
import { useEffect, useState } from "react";
import { decodeToken } from "@/app/types/auth.type";
import { decodejwt } from "@/util/jwtUtil";

const ExploreNavBar = () => {
	const t = useTranslations("NavBar");
	const [userData, setUserData] = useState<decodeToken>();
	const [isDropdownOpen, setIsDropdown] = useState(false);
	const [exploreTimeout, setExploreTimeout] = useState<NodeJS.Timeout | null>(
		null
	);

	useEffect(() => {
		const fetchToken = async () => {
			const token = (await getToken()) || "";
			setUserData(decodejwt(token));
		};
		fetchToken();
	}, []);

	return (
		<div className="flex flex-row justify-between items-center p-4 h-[60px] bg-white">
			<div className="flex justify-between m-[20px] w-full">
				<div className="flex space-x-[40px]">
					<Link href={"/"}>
						<Image
							src={"https://i.ibb.co/TxmH6YPG/images.png"}
							width={40}
							height={40}
							alt="Logo"
						/>
					</Link>
				</div>

				<div className="flex items-center space-x-5">
					<Button className="rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-white">
						Buy Now
					</Button>
					{userData?.username ? (
						<>
							<div className="relative">
								<div
									onMouseEnter={() => setIsDropdown(true)}
									onMouseLeave={() => setIsDropdown(false)}
									className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold hover:bg-blue-600 cursor-pointer">
									{userData.username.charAt(0).toUpperCase()}
								</div>

								{isDropdownOpen && (
									<div
										onMouseEnter={() => setIsDropdown(true)}
										onMouseLeave={() => setIsDropdown(false)}
										className={`absolute top-full right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-all duration-200 ease-out transform
                      ${
												isDropdownOpen
													? "opacity-100 translate-y-0"
													: "opacity-0 -translate-y-2 pointer-events-none"
											}`}>
										<ul className="py-2 text-sm text-gray-700">
											<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
												<Link href="/profile">{t("profile")}</Link>
											</li>
											<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
												<Link href="/settings">{t("settings")}</Link>
											</li>
											<li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
												<Link href="/logout">{t("logout")}</Link>
											</li>
										</ul>
									</div>
								)}
							</div>
						</>
					) : (
						<>
							<Link href="/login">
								<Button className="bg-blue-500 hover:bg-blue-600 rounded-xl">
									{t("login")}
								</Button>
							</Link>
							<Link href="/signup">
								<Button className="bg-blue-100 border-blue-400 border-0 text-blue-600 rounded-xl hover:bg-blue-200 ml-2">
									{t("signup")}
								</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ExploreNavBar;
