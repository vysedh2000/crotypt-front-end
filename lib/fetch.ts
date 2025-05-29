import { decryptData, encryptData } from "./decryption";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (
	endPoint: string,
	method: string,
	request?: any,
	pathVariable = false
) => {
	const enableEncrypt = process.env.ENCRYPTION_ENABLED === "true";
	const enableEncryptSend = process.env.ENCRYPTION_ENABLED_SEND === "true";
	try {
		if (request) {
			if (enableEncryptSend) {
				request = encryptData(JSON.stringify(request));
			}
			if (pathVariable) {
				const response = await fetch(
					`${process.env.API}${endPoint}?payload=${request}`,
					{
						method: method,
						headers: {
							"Content-type": "application/json",
						},
					}
				);
				if (enableEncrypt) {
					const data = await response.text();
					return await decryptData(data);
				}
				return await response.json();
			}
			const response = await fetch(`${process.env.API}${endPoint}`, {
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
				body: enableEncryptSend
					? JSON.stringify({ payload: request })
					: JSON.stringify(request),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			if (enableEncrypt) {
				const data = await response.text();
				return await decryptData(data);
			}
			return await response.json();
		}
		const response = await fetch(`${process.env.API}${endPoint}`, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		if (enableEncrypt) {
			const data = await response.text();
			return await decryptData(data);
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
