import { NextResponse } from "next/server";

function getConfiguredPaymasterUrl(): string {
  const explicit =
    process.env.BASE_PAYMASTER_URL ||
    process.env.NEXT_PUBLIC_BASE_PAYMASTER_URL ||
    "";
  if (explicit.trim()) return explicit.trim();

  // Convenience fallback for CDP projects that only set API key.
  const cdpApiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || "";
  if (cdpApiKey.trim()) {
    return `https://api.developer.coinbase.com/rpc/v1/base/${cdpApiKey.trim()}`;
  }

  return "";
}

export async function GET() {
  const paymasterUrl = getConfiguredPaymasterUrl();
  return NextResponse.json({ paymasterUrl });
}

