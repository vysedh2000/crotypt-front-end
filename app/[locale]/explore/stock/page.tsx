import CryptoExplore from "../../_components/explore/CryptoExplore";
import ExploreNavBar from "../../_components/explore/ExploreNavBar";
import ExploreSideBar from "../../_components/explore/SideBar";
import StockExplore from "../../_components/explore/StockExplore";

const Page = () => {
	return (
		<div>
			<ExploreNavBar />
			<div className="flex w-full mt-10">
				<div className="w-1/12">
					<ExploreSideBar />
				</div>
				<div className="w-11/12">
					<StockExplore />
				</div>
			</div>
		</div>
	);
};

export default Page;
