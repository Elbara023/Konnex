import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const gamePath = path.join(process.cwd(), "index.html");
  const html = await fs.readFile(gamePath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
