const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const farcasterConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjE2MzkwNDcsInR5cGUiOiJhdXRoIiwia2V5IjoiMHgxNzNmN2ZDNUIzQmI1NGI2NTYzNTc3RkE4ZTVhQzBCRGY5MDdGMWJDIn0",
    payload: "eyJkb21haW4iOiJiYXNlLWdhbWUwLnZlcmNlbC5hcHAifQ",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHdDiXQ2YINOvbpU6W1s9W-o8Hi63frVVS8OzcnVQiMq1oAN8JGA7m9bmVhE_9pSR-dTttxNkb1SI6HSj60J6XXGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  miniapp: {
    version: "1",
    name: "Golden Dragon Snake",
    subtitle: "Dragon Head Arcade",
    description: "Play Golden Dragon Snake, collect logo treasures, and claim daily free transactions.",
    screenshotUrls: [`${ROOT_URL}/dragon-head-logo.png`],
    iconUrl: `${ROOT_URL}/dragon-head-logo.png`,
    splashImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "games",
    tags: ["game", "snake", "dragon", "arcade", "base"],
    heroImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
    tagline: "Play as the golden dragon.",
    ogTitle: "Golden Dragon Snake",
    ogDescription: "Collect treasures, grow stronger, and claim daily rewards.",
    ogImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
  },
} as const;

