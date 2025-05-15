"use server";
import { fetchData } from "@/lib/fetch";
import { GET, POST } from "@/app/constant/method";
import { cookies } from "next/headers";
import { defaultResponse } from "@/app/types/default.type";

export async function loginAction(data: any) {
	try {
		const res = await fetchData("/auth/login", POST, data);
		const authData: defaultResponse = await res;
		(await cookies()).set("sessionToken", authData.data.sessionToken);
		(await cookies()).set("userToken", authData.data.userToken);
		return authData;
	} catch (e: any) {
		throw new Error("Internal Server Error!");
	}
}

export async function signupAction(data: any) {
	try {
		const res = await fetchData("/auth/signup", POST, data);
		return res;
	} catch (e: any) {
		throw new Error("Internal Server Error!");
	}
}

export async function testAction() {
	await fetch(`${process.env.API}/auth/test`, {
		method: GET,
		credentials: "include",
		headers: {
			Cookie: "sessionToken=test",
		},
	});
}
