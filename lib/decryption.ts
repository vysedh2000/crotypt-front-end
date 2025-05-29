import crypto from "crypto";

const ENCRYPTION_ENABLED = process.env.ENCRYPTION_ENABLED === "true";
const ENCRYPTION_ALGORITHM = process.env.ENCRYPTION_ALGORITHM || "aes-256-cbc";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";
const ENCRYPTION_KEY1 = process.env.ENCRYPTION_KEY1 || "";
const ENCRYPTION_IV_LENGTH = parseInt(process.env.ENCRYPTION_IV_LENGTH || "16");

const hexa = (base64: string) => {
	return Buffer.from(base64, "utf-8").toString("hex");
};

export function encryptData(data: string): string {
	if (!ENCRYPTION_ENABLED) return Buffer.from(data).toString("base64");

	const iv = crypto.randomBytes(ENCRYPTION_IV_LENGTH);
	const key = Buffer.from(ENCRYPTION_KEY1, "base64");
	const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, iv);

	let encrypted = cipher.update(data, "utf8", "base64");
	encrypted += cipher.final("base64");
	const encryptData = `${iv.toString("base64")}:${encrypted}`;

	return hexa(encryptData);
}

export function decryptData(encryptedData: string): string {
	if (!ENCRYPTION_ENABLED)
		return Buffer.from(encryptedData, "base64").toString("utf8");

	const [ivString, content] = encryptedData.split(":");
	const key = Buffer.from(ENCRYPTION_KEY, "base64");
	const iv = Buffer.from(ivString, "base64");
	const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, key, iv);

	let decrypted = decipher.update(content, "base64", "utf8");
	decrypted += decipher.final("utf8");
	return decrypted;
}
