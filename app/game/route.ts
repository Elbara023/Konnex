import { promises as fs } from "fs";
import path from "path";

function getConfiguredPaymasterUrl(): string {
  const explicit =
    process.env.BASE_PAYMASTER_URL ||
    process.env.NEXT_PUBLIC_BASE_PAYMASTER_URL ||
    "";
  if (explicit.trim()) return explicit.trim();

  const cdpApiKey = process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || "";
  if (cdpApiKey.trim()) {
    return `https://api.developer.coinbase.com/rpc/v1/base/${cdpApiKey.trim()}`;
  }
  return "";
}

export async function GET() {
  const gamePath = path.join(process.cwd(), "index.html");
  let html = await fs.readFile(gamePath, "utf8");
  const paymasterUrl = getConfiguredPaymasterUrl();
  if (paymasterUrl) {
    html = html.replace(
      '<meta name="base:paymaster_url" content="" />',
      `<meta name="base:paymaster_url" content="${paymasterUrl}" />`,
    );
  }

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
