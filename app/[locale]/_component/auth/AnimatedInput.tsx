"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { memo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface AnimatedInputProps {
	error?: string;
	className?: string;
	type?: string;
	placeholder?: string;
	value?: string;
	onChange: (value: string) => void;
	id?: string;
}

export const AnimatedInput = memo(function AnimatedInput({
	error,
	className,
	type = "text",
	placeholder,
	value,
	onChange,
	id = "animated-input",
}: AnimatedInputProps) {
	const [pwView, setPwView] = useState(false);
	return (
		<div className="space-y-1">
			<div className="relative">
				<Input
					id={id}
					className={cn(
						"peer h-[45px] border-0 rounded-none bg-blue-100/50 px-4 pt-6 text-sm transition-all placeholder:text-transparent focus:bg-blue-100/80",
						className
					)}
					placeholder=" "
					type={pwView ? "text" : type}
					value={value}
					onChange={e => onChange(e.target.value)}
				/>
				{type === "password" && (
					<div
						className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
						onClick={() => setPwView(!pwView)}>
						{pwView ? (
							<FaEyeSlash className="h-5 w-5" />
						) : (
							<FaEye className="h-5 w-5" />
						)}
					</div>
				)}
				<Label
					htmlFor={id}
					className="absolute left-4 top-3.5 z-10 origin-[0] -translate-y-2.5 scale-75 
                   text-sm transition-all duration-300
                   peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                   peer-focus:-translate-y-2.5 peer-focus:scale-75">
					{placeholder}
				</Label>
			</div>
			{error && (
				<p className="text-xs text-red-500 pl-2">
					{error.split("\n").map((line, index) => (
						<span key={index}>
							{line}
							<br />
						</span>
					))}
				</p>
			)}
		</div>
	);
});
