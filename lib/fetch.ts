import { decryptData } from "./decryption";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (
  endPoint: string,
  method: string,
  request?: any,
  pathVariable?: boolean
) => {
  try {
    if (request) {
      if (pathVariable) {
        const response = await fetch(`${process.env.API}${endPoint}?payload=${request}`, {
          method: method,
          headers: {
            "Content-type": "application/json"
          }
        }
        )
      }
      const response = await fetch(`${process.env.API}${endPoint}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });



      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      return await decryptData(data);
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

    const data = await response.text();
    return await decryptData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};