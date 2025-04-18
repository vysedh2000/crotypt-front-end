import { decryptData } from "./decrypt";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchData = async (
  endPoint: string,
  method: string,
  request?: any
) => {
  try {
    if (request) {
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

export const fetchDataWithRequest = async (
  endPoint: string,
  method: string,
  request: any
) => {
  try {
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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
