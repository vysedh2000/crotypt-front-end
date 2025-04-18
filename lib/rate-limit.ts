import { RateLimiter } from "limiter";

export const rateLimiter = new RateLimiter({
  tokensPerInterval: 10, // 10 requests
  interval: "minute", // per minute
});
