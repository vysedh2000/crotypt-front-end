"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
} from "@/components/ui/select";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useVirtualizer } from "@tanstack/react-virtual";
import { memo } from "react";

interface Country {
	code: string;
	commonName: string;
	officialName: string;
}

interface CountryDropdownProps {
	value?: string;
	onChange?: (country: Country) => void;
	showOfficialName?: boolean;
	className?: string;
	sortOrder?: "asc" | "desc";
}

function SortedCountryDropdown({
	value = "",
	onChange,
	className = "",
	sortOrder = "asc",
}: CountryDropdownProps) {
	const [countries, setCountries] = useState<Country[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [focused, setFocused] = useState(false);
	const listRef = useRef<HTMLDivElement>(null);

	// fetch immediately once (so that it's sorted and available)
	useEffect(() => {
		const fetchCountries = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					"https://restcountries.com/v3.1/all?fields=name,cca2",
					{ next: { revalidate: 86400 } }
				);

				if (!response.ok) throw new Error("Failed to fetch countries");

				const data: any = await response.json();

				const processedCountries = data
					.map((country: any) => ({
						code: country.cca2,
						commonName: country.name.common,
						officialName: country.name.official,
					}))
					.sort((a: Country, b: Country) =>
						sortOrder === "asc"
							? a.commonName.localeCompare(b.commonName)
							: b.commonName.localeCompare(a.commonName)
					);

				setCountries(processedCountries);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
				console.error("Country fetch error:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchCountries();
	}, [sortOrder]);

	const handleValueChange = (selectedCode: string) => {
		const selectedCountry = countries.find(c => c.code === selectedCode);
		if (selectedCountry && onChange) {
			onChange(selectedCountry);
		}
	};

	const hasValue = !!value;
	const shouldFloat = focused || hasValue;

	const rowVirtualizer = useVirtualizer({
		count: countries.length,
		getScrollElement: () => listRef.current,
		estimateSize: () => 40,
		overscan: 10,
	});

	// 🧠 find the selected country's name to display
	const selectedCountryName =
		countries.find(c => c.code === value)?.commonName ?? "";

	return (
		<div className="relative h-[45px] flex flex-col justify-center">
			<Select
				value={value}
				onValueChange={handleValueChange}
				onOpenChange={setFocused}>
				<SelectTrigger
					className={cn(
						"h-[45px] min-h-[45px] pt-5 text-left",
						"dark:bg-blue-100/50 border dark:hover:bg-blue-100",
						className
					)}>
					<span
						className={cn(
							"absolute left-3 pointer-events-none transition-all duration-200 origin-top-left",
							shouldFloat
								? "top-1 text-xs scale-75 text-muted-foreground"
								: "top-1/2 -translate-y-1/2 text-sm"
						)}>
						Select your country
					</span>

					{/* 👇 fix the value shown manually */}
					<div className="w-full pt-3 pr-7 text-left truncate h-[45px]">
						{hasValue ? selectedCountryName : ""}
					</div>
				</SelectTrigger>

				<SelectContent>
					<SelectGroup>
						<SelectLabel>Countries</SelectLabel>

						{loading && (
							<div className="p-2 text-muted-foreground text-sm">
								Loading countries...
							</div>
						)}
						{error && (
							<div className="p-2 text-red-500 text-sm">Error: {error}</div>
						)}

						{!loading && !error && (
							<div
								ref={listRef}
								style={{
									height: "300px",
									overflow: "auto",
									position: "relative",
								}}>
								<div
									style={{
										height: `${rowVirtualizer.getTotalSize()}px`,
										width: "100%",
										position: "relative",
									}}>
									{rowVirtualizer.getVirtualItems().map(virtualRow => {
										const country = countries[virtualRow.index];
										return (
											<div
												key={country.code}
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													width: "100%",
													transform: `translateY(${virtualRow.start}px)`,
												}}>
												<SelectItem value={country.code}>
													{country.commonName}
												</SelectItem>
											</div>
										);
									})}
								</div>
							</div>
						)}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}

export default memo(SortedCountryDropdown);
