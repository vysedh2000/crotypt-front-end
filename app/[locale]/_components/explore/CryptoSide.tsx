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
import { Link } from "@/i18n/routing";
import { formatMoney } from "@/lib/utils";
import { Crypto } from "@/types/crypto.type";
import {
	ArrowDownRight,
	ArrowUpRight,
	Coins,
	LineChart,
	RefreshCw,
} from "lucide-react";
import { useTranslations } from "next-intl";

const cryptoData: Crypto[] = [
	{
		id: 1,
		name: "Bitcoin",
		price: 76127.87,
		ccy: "USD",
		volume: 712828,
		imageUrl: "https://i.ibb.co/W4kwxZx8/Bitcoin-svg.png",
		symbol: "BTC",
		change: 2.35,
	},
	{
		id: 2,
		name: "Ethereum",
		price: 3129.12,
		ccy: "USD",
		volume: 933288,
		imageUrl: "https://i.ibb.co/DfFM74Sw/51-T9i1l0-IYL.jpg",
		symbol: "ETH",
		change: -0.75,
	},
	{
		id: 3,
		name: "Binance",
		price: 585.34,
		ccy: "USD",
		volume: 456789,
		imageUrl: "https://i.ibb.co/B21tjpFs/Binance-Coin-1.png",
		symbol: "BNB",
		change: 1.21,
	},
	{
		id: 4,
		name: "Cardano",
		price: 0.58,
		ccy: "USD",
		volume: 1234567,
		imageUrl: "https://i.ibb.co/Kzm5F1zq/logo.png",
		symbol: "ADA",
		change: -1.15,
	},
	{
		id: 5,
		name: "Solana",
		price: 145.23,
		ccy: "USD",
		volume: 891234,
		imageUrl: "https://i.ibb.co/21Rz8pK2/Solana-logo.png",
		symbol: "SOL",
		change: 3.89,
	},
];

const CryptoSide = () => {
	const t = useTranslations("Explore");
	return (
		<div className="rounded-xl bg-white shadow-2xl transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
			<div className="mb-4 flex items-center justify-between px-6 pt-6">
				<div className="flex items-center gap-3">
					<div className="rounded-lg bg-blue-500/10 p-2">
						<Coins className="h-6 w-6 text-blue-500" />
					</div>
					<h2 className="text-2xl font-bold text-gray-900">Crypto Market</h2>
				</div>
				<div className="flex items-center gap-2">
					<button className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-white px-4 py-2 text-sm font-semibold text-blue-500 transition-all hover:border-blue-500/40 hover:bg-blue-50">
						<RefreshCw className="h-4 w-4" />
						{t("refresh") || "Refresh"}
					</button>
					<Link href={"/explore/crypto"}>
						<button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-blue-600 hover:to-blue-700">
							<LineChart className="h-4 w-4" />
							{t("viewAll") || "View All"}
						</button>
					</Link>
				</div>
			</div>

			<div className="px-6 pb-6">
				<Table className="min-w-[650px]">
					<TableHeader className="bg-gradient-to-r from-blue-500 to-blue-600">
						<TableRow className="hover:bg-transparent">
							<TableHead className="rounded-tl-xl font-bold uppercase text-white">
								#
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								{t("name") || "Name"}
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								{t("price") || "Price"}
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								24h %
							</TableHead>
							<TableHead className="font-bold uppercase text-white">
								{t("volume") || "Volume"}
							</TableHead>
							<TableHead className="rounded-tr-xl text-right font-bold uppercase text-white">
								{t("marcap") || "Market Cap"}
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{cryptoData.map(item => (
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
												alt={item.name}
												className="h-6 w-6 rounded-full object-cover"
												onError={e => {
													(e.target as HTMLImageElement).src =
														"/fallback-crypto.png";
												}}
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
					<TableCaption className="mb-4 text-left text-sm text-gray-500">
						{t("cryptofoot") || "Live cryptocurrency prices and market data"}
					</TableCaption>
				</Table>
			</div>
		</div>
	);
};

export default CryptoSide;
