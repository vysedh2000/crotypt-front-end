import crypto from "crypto";

const ENCRYPTION_ENABLED = process.env.ENCRYPTION_ENABLED === "true";
const ENCRYPTION_ALGORITHM = process.env.ENCRYPTION_ALGORITHM || "aes-256-cbc";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";

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
