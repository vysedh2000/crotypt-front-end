import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AnimatedInputPW({ error }: { error?: string }) {
	return (
		<div className="space-y-1">
			<div className="relative">
				<Input
					id="email"
					type="password"
					className="peer h-[45px] border-0 w-[450px] rounded-b-xl rounded-t-none bg-blue-100/50 px-4 pt-6 text-sm transition-all placeholder:text-transparent focus:bg-blue-100/80"
					placeholder=" "
				/>
				<Label
					htmlFor="password"
					className="absolute left-4 top-3.5 z-10 origin-[0] -translate-y-2.5 scale-75 
                     text-sm transition-all duration-300
                     peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                     peer-focus:-translate-y-2.5 peer-focus:scale-75">
					Password
				</Label>
			</div>
			{error && <p className="text-xs text-red-500">{error}</p>}
		</div>
	);
}
