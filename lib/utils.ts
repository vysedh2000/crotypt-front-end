import { USD } from "@/app/constant/currency";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatMoney = (value: string, ccy: string): string => {
	const number = Number(value);
	const formated = number.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	let finalResponse;
	if (ccy == USD) {
		finalResponse = "$ " + formated;
	} else {
		finalResponse = formated;
	}
	return finalResponse;
};
