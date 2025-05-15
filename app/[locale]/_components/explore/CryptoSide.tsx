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
import { Crypto, CryptoPriceHis } from "@/types/crypto.type";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const data: Crypto[] = [
	{
		id: 1,
		name: "Bitcoin",
		price: 76127.87,
		ccy: "USD",
		volume: 712828,
		imageUrl: "https://i.ibb.co/W4kwxZx8/Bitcoin-svg.png",
		symbol: "BTC",
	},
	{
		id: 2,
		name: "Etherum",
		price: 3129.12,
		ccy: "USD",
		volume: 933288,
		imageUrl: "https://i.ibb.co/DfFM74Sw/51-T9i1l0-IYL.jpg",
		symbol: "ETH",
	},
	{
		id: 3,
		name: "Binance",
		price: 585.34,
		ccy: "USD",
		volume: 456789,
		imageUrl: "https://i.ibb.co/B21tjpFs/Binance-Coin-1.png",
		symbol: "BNB",
	},
	{
		id: 4,
		name: "Cardano",
		price: 0.58,
		ccy: "USD",
		volume: 1234567,
		imageUrl: "https://i.ibb.co/Kzm5F1zq/logo.png",
		symbol: "ADA",
	},
	{
		id: 5,
		name: "Solana",
		price: 145.23,
		ccy: "USD",
		volume: 891234,
		imageUrl: "https://i.ibb.co/21Rz8pK2/Solana-logo.png",
		symbol: "SOL",
	},
];

const CryptoSide = () => {
	const t = useTranslations("Explore");
	const countRef = useRef(1);
	return (
		<div className="rounded-lg border p-6 shadow-sm">
			<h2 className="mb-4 text-2xl font-bold text-gray-800">Crypto Market</h2>
			<Table className="min-w-[650px]">
				<TableCaption className="mt-4">{t("cryptofoot")}</TableCaption>
				<TableHeader className="bg-gray-50">
					<TableRow>
						<TableHead className="w-[60px] font-semibold text-gray-600">
							#
						</TableHead>
						<TableHead className="font-semibold text-gray-600">
							{t("name")}
						</TableHead>
						<TableHead className="font-semibold text-gray-600">
							{t("price")}
						</TableHead>
						<TableHead className="font-semibold text-gray-600">
							{t("volume")}
						</TableHead>
						<TableHead className="text-right font-semibold text-gray-600">
							{t("marcap")}
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.map(item => (
						<TableRow key={item.id} className="hover:bg-gray-50">
							<TableCell className="font-medium text-gray-600">
								{item.id}
							</TableCell>
							<TableCell className="flex items-center gap-3">
								<img
									src={item.imageUrl}
									alt={item.name}
									className="h-8 w-8 rounded-full"
									onError={e => {
										(e.target as HTMLImageElement).src = "/fallback-crypto.png";
									}}
								/>
								<div>
									<span className="font-medium text-gray-800">{item.name}</span>
									<span className="ml-2 text-sm uppercase text-gray-500">
										{item.symbol}
									</span>
								</div>
							</TableCell>
							<TableCell className="font-medium text-blue-600">
								{formatMoney(item.price.toString(), item.ccy)}
							</TableCell>
							<TableCell className="text-gray-600">
								{item.volume.toLocaleString()}
							</TableCell>
							<TableCell className="text-right font-medium text-green-600">
								{formatMoney((item.price * item.volume).toString(), item.ccy)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default CryptoSide;
