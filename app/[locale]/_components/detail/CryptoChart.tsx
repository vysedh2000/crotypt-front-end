"use client";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";

const cryptoData = [
	{
		id: 1,
		symbol: "BTC",
		price: 78272.12,
		ccy: "USD",
		time: "0:00",
		insertAt: "2025-05-08T15:00:54.948Z",
	},
	{
		id: 2,
		symbol: "BTC",
		price: 78362.22,
		ccy: "USD",
		time: "1:00",
		insertAt: "2025-05-08T15:01:10.151Z",
	},
	{
		id: 3,
		symbol: "BTC",
		price: 78281.89,
		ccy: "USD",
		time: "2:00",
		insertAt: "2025-05-08T15:02:19.804Z",
	},
	{
		id: 4,
		symbol: "BTC",
		price: 76221.89,
		ccy: "USD",
		time: "4:00",
		insertAt: "2025-05-27T15:35:29.110Z",
	},
	{
		id: 5,
		symbol: "BTC",
		price: 77221.89,
		ccy: "USD",
		time: "5:00",
		insertAt: "2025-05-27T15:35:36.506Z",
	},
	{
		id: 6,
		symbol: "BTC",
		price: 78281.89,
		ccy: "USD",
		time: "6:00",
		insertAt: "2025-05-08T15:02:19.804Z",
	},
	{
		id: 7,
		symbol: "BTC",
		price: 80221.89,
		ccy: "USD",
		time: "7:00",
		insertAt: "2025-05-27T15:35:29.110Z",
	},
	{
		id: 8,
		symbol: "BTC",
		price: 79221.89,
		ccy: "USD",
		time: "8:00",
		insertAt: "2025-05-27T15:35:36.506Z",
	},
	{
		id: 9,
		symbol: "BTC",
		price: 75281.89,
		ccy: "USD",
		time: "9:00",
		insertAt: "2025-05-08T15:02:19.804Z",
	},
	{
		id: 10,
		symbol: "BTC",
		price: 76221.89,
		ccy: "USD",
		time: "10:00",
		insertAt: "2025-05-27T15:35:29.110Z",
	},
	{
		id: 11,
		symbol: "BTC",
		price: 77221.89,
		ccy: "USD",
		time: "11:00",
		insertAt: "2025-05-27T15:35:36.506Z",
	},
	{
		id: 12,
		symbol: "BTC",
		price: 82221.89,
		ccy: "USD",
		time: "12:00",
		insertAt: "2025-05-27T15:35:36.506Z",
	},
];

const chartConfig = {
	price: {
		label: "Bitcoin Price $",
		color: "#6366f1",
	},
} satisfies ChartConfig;

const CryptoChart = () => {
	return (
		<div>
			<Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>Bitcoin Price Chart</CardTitle>
				</CardHeader>
				<CardContent className="pb-4">
					<ChartContainer config={chartConfig}>
						<LineChart
							data={cryptoData}
							margin={{
								top: 5,
								right: 20,
								left: 20,
								bottom: 5,
							}}
							width={500}
							height={300}>
							<CartesianGrid
								vertical={false}
								strokeDasharray="3 3"
								stroke="#f1f5f9"
							/>
							<XAxis
								dataKey="time"
								tickLine={true}
								tickSize={0}
								axisLine={true}
								tickMargin={20}
								tick={{ fill: "#64748b" }}
							/>
							<YAxis
								axisLine={true}
								tickLine={true}
								tickMargin={10}
								width={100}
								tickFormatter={value => `$${value.toLocaleString()}`}
								domain={[76000, 79000]}
								tick={{ fill: "#64748b" }}
							/>
							<ChartTooltip
								cursor={{ stroke: "#6366f1", strokeWidth: 1 }}
								content={<ChartTooltipContent />}
							/>
							<Line
								dataKey="price"
								type="monotone"
								stroke="#6366f1"
								strokeWidth={2}
								dot={false}
								activeDot={{
									r: 6,
									fill: "#6366f1",
									stroke: "#fff",
									strokeWidth: 2,
								}}
							/>
						</LineChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</div>
	);
};

export default CryptoChart;
