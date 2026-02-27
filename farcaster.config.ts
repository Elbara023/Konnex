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
    signature: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABysqv34ICs_CQSAl8x32hUpYyoAUQdGzJHD3IBFbcxYFDa_omi3t8kUaa955xYDjPw9bmz09VJqM6oRAWytvT0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAl8ZgIay2xclZzG8RWZzuWvO8j9R0fus3XxDee9lRlVy8dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACKeyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiRUZ3UzZCRVJkWXhhVXN5bWVMQmFUOHItdkRHNExmbTRCS21FLWpsd0hHYyIsIm9yaWdpbiI6Imh0dHBzOi8va2V5cy5jb2luYmFzZS5jb20iLCJjcm9zc09yaWdpbiI6ZmFsc2V9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
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

