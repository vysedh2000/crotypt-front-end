"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatMoney } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
	ArrowUpRight,
	ArrowDownRight,
	BarChart3,
	RefreshCw,
	TrendingUp,
} from "lucide-react";
import { Link } from "@/i18n/routing";

const stockData: Stock[] = [
	{
		id: 1,
		name: "Apple Inc.",
		symbol: "AAPL",
		price: 187.45,
		ccy: "USD",
		volume: 55478912,
		imageUrl: "https://i.ibb.co/3mHPY7j3/apple-600.png",
		change: 1.28,
	},
	{
		id: 2,
		name: "Microsoft Corp.",
		symbol: "MSFT",
		price: 415.32,
		ccy: "USD",
		volume: 25364782,
		imageUrl: "https://i.ibb.co/Z6cTHF46/microsoft-600.png",
		change: 0.95,
	},
	{
		id: 3,
		name: "Amazon.com Inc.",
		symbol: "AMZN",
		price: 178.25,
		ccy: "USD",
		volume: 31562489,
		imageUrl: "https://i.ibb.co/C506BmhX/amazon-600.png",
		change: -0.82,
	},
	{
		id: 4,
		name: "Tesla Inc.",
		symbol: "TSLA",
		price: 245.87,
		ccy: "USD",
		volume: 67234517,
		imageUrl: "https://i.ibb.co/27fXPmkz/tesla-600.png",
		change: 2.75,
	},
	{
		id: 5,
		name: "NVIDIA Corp.",
		symbol: "NVDA",
		price: 924.15,
		ccy: "USD",
		volume: 42587163,
		imageUrl: "https://i.ibb.co/FLzf09LP/nvidia-600.png",
		change: 3.41,
	},
];
const StockSide = () => {
	const t = useTranslations("Explore");

	return (
		<div className="rounded-xl bg-white shadow-2xl transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
			<div className="mb-4 flex items-center justify-between px-6 pt-6">
				<div className="flex items-center gap-3">
					<div className="rounded-lg bg-blue-500/10 p-2">
						<TrendingUp className="h-6 w-6 text-blue-500" />
					</div>
					<Link href={"/explore/stock"}>
						<h2 className="text-2xl font-bold text-gray-900">Stock Market</h2>
					</Link>
				</div>
				<div className="flex items-center gap-2">
					<button className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-white px-4 py-2 text-sm font-semibold text-blue-500 transition-all hover:border-blue-500/40 hover:bg-blue-50">
						<RefreshCw className="h-4 w-4" />
						{t("refresh")}
					</button>
					<Link href={"/explore/stock"}>
						<button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-blue-700">
							<BarChart3 className="h-4 w-4" />
							{t("viewAll")}
						</button>
					</Link>
				</div>
			</div>

			<div className="px-6 pb-6">
				<Table className="min-w-[650px]">
					<TableCaption className="mb-4 text-left text-sm text-gray-500">
						Real-time stock market data updated every 15 seconds
					</TableCaption>
					<TableHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
						<TableRow className="hover:bg-transparent">
							<TableHead className="rounded-tl-xl font-bold uppercase text-white">
								#
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								Company
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								Price
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								24h Change
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								Volume
							</TableHead>
							<TableHead className="rounded-tr-xl text-right font-bold uppercase text-white">
								Market Cap
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{stockData.map(item => (
							<TableRow
								key={item.id}
								className="border-b-0 transition-colors hover:bg-blue-50/50">
								<TableCell className="font-medium text-gray-600">
									{item.id}
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-100 bg-white">
											<img
												src={item.imageUrl}
												alt=""
												className="h-6 w-6 rounded-full"
											/>
										</div>
										<div>
											<div className="font-semibold text-gray-900">
												{item.name}
											</div>
											<div className="text-sm text-gray-500">{item.symbol}</div>
										</div>
									</div>
								</TableCell>
								<TableCell className="font-semibold text-blue-600">
									{formatMoney(item.price.toString(), item.ccy)}
								</TableCell>
								<TableCell>
									<div
										className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
											item.change >= 0
												? "bg-green-100 text-green-700"
												: "bg-red-100 text-red-700"
										}`}>
										{item.change >= 0 ? (
											<ArrowUpRight className="h-4 w-4" />
										) : (
											<ArrowDownRight className="h-4 w-4" />
										)}
										{Math.abs(item.change)}%
									</div>
								</TableCell>
								<TableCell className="font-medium text-gray-600">
									{item.volume.toLocaleString()}
								</TableCell>
								<TableCell className="text-right font-medium text-gray-900">
									{formatMoney((item.price * item.volume).toString(), item.ccy)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default StockSide;
