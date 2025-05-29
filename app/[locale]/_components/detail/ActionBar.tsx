import { Minus, Plus } from "lucide-react";
import { PiLineVertical } from "react-icons/pi";
import { LiaDownloadSolid, LiaUploadSolid } from "react-icons/lia";
import { RiExpandHorizontalLine } from "react-icons/ri";

const ActionBar = () => {
	return (
		<div className="w-full">
			<div className="flex items-center justify-center">
				<div className="space-x-4 flex">
					<div className="flex flex-col items-center justify-center">
						<Plus className="border-2 rounded-full w-20 h-20 bg-blue-400 text-white hover:bg-blue-500" />
						<p className="font-bold text-[17px]">Buy</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Minus className="border-2 rounded-full w-20 h-20 bg-blue-400 text-white hover:bg-blue-500" />
						<p className="font-bold text-[17px]">Sell</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<RiExpandHorizontalLine className="border-2 rounded-full w-20 h-20 bg-blue-400 text-white p-2 hover:bg-blue-500" />
						<p className="font-bold text-[17px]">Convert</p>
					</div>
				</div>
				<PiLineVertical className="h-[90px] w-[90px]" />
				<div className="space-x-4 flex">
					<div className="flex flex-col items-center justify-center">
						<LiaDownloadSolid className=" rounded-full w-20 h-20 p-3 bg-gray-200 hover:bg-gray-400" />
						<p className="font-bold text-[17px]">Deposit</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<LiaUploadSolid
							className="rounded-full w-20 h-20 p-3 bg-gray-200
                        hover:bg-gray-400"
						/>
						<p className="font-bold text-[17px]">Withdraw</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActionBar;
