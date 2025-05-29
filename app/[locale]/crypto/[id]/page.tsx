import ActionBar from "../../_components/detail/ActionBar";
import CryptoDetail from "../../_components/detail/CryptoChart";
import ExploreSideBar from "../../_components/explore/SideBar";

const Page = () => {
	return (
		<div className="flex">
			<div>
				<ExploreSideBar />
			</div>
			<div className="w-[1100px] flex-col h-[400px] items-center justify-center">
				<CryptoDetail />
				<ActionBar />
			</div>
		</div>
	);
};

export default Page;
