import { headers } from "next/headers";

export async function getClientIp() {
  const h = await headers();

  const xff = h.get("x-forwarded-for");
  // x-forwarded-for can be "client, proxy1, proxy2"
  const ip = xff?.split(",")[0]?.trim();
  return ip || h.get("x-real-ip") || "unknown";
}
