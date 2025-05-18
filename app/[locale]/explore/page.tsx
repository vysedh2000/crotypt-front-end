import CryptoSide from "../_components/explore/CryptoSide";
import StockSide from "../_components/explore/StockSide";
import ExploreNavBar from "../_components/explore/ExploreNavBar";

const Page = () => {
	return (
		<div>
			<ExploreNavBar />
			<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-8">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex snap-x snap-mandatory flex-col gap-6 overflow-x-auto pb-4 md:snap-none md:overflow-x-visible">
						<div className="min-w-[90vw] snap-start md:min-w-0 md:flex-1">
							<CryptoSide />
						</div>
						<div className="min-w-[90vw] snap-start md:min-w-0 md:flex-1">
							<StockSide />
						</div>
					</div>

					<div className="mt-8 text-center text-sm text-gray-500">
						Market data updates every 15 seconds. Prices are for reference only.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
