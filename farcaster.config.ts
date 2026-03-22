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
    header: "eyJmaWQiOjE3NjAxMjgsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg5MjRGOTE3ZEI2OWNGMUJjMGE2NDIwOTI4QzA0RjI4NzdDNjRENkZkIn0",
    payload: "eyJkb21haW4iOiJiYXNlLWRyYWdvbi52ZXJjZWwuYXBwIn0",
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABN3n3U0eWxcDog5N1GWZql6GSkA47xYqsouiZ80_Etq1ZrVPOCjuhzs7UsnVjzor5WKHTgo9k5B-4jq3lqZPWvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiRUZ3UzZCRVJkWXhhVXN5bWVMQmFUOHItdkRHNExmbTRCS21FLWpsd0hHYyIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  },
  miniapp: {
    version: "1",
    name: "Konnex Mint Countdown",
    subtitle: "Live Event Timer",
    description: "Live countdown page for the Konnex Autonomous Units mint end date with direct mint link.",
    screenshotUrls: [`${ROOT_URL}/dragon-head-logo.png`],
    iconUrl: `${ROOT_URL}/dragon-head-logo.png`,
    splashImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "art-creativity",
    tags: ["konnex", "nft", "countdown", "mint", "timer"],
    heroImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
    tagline: "Track mint end time in real time.",
    ogTitle: "Konnex Mint Countdown",
    ogDescription: "Watch the live timer to mint end and open the collection page instantly.",
    ogImageUrl: `${ROOT_URL}/dragon-head-logo.png`,
  },
} as const;

