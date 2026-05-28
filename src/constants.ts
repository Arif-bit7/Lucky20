import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

// ======================================================
// Lucky20 - Premium Crypto Gaming Platform
// Owner: Samin Sami
// Theme Direction:
// Deep Purple + Neon Violet + Glass Morphism + Vegas Luxury
// ======================================================

// RPC Endpoint
export const RPC_ENDPOINT =
  import.meta.env.VITE_RPC_ENDPOINT ??
  'https://api.mainnet-beta.solana.com'

// Platform Wallet Address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'V2grJiwjs25iJYqumbHyKo5MTK7SFqZSdmoRaj8QWb9',
)

// Custom Branding
export const PLATFORM_NAME = 'Lucky20'
export const PLATFORM_OWNER = 'Samin Sami'

// Explorer URL
export const EXPLORER_URL = 'https://lucky20.vercel.app'

// Share URL
export const PLATFORM_SHARABLE_URL = 'https://lucky20.vercel.app'

// ======================================================
// FEES
// ======================================================

export const PLATFORM_CREATOR_FEE = 0.01
export const MULTIPLAYER_FEE = 0.015
export const PLATFORM_JACKPOT_FEE = 0.001
export const PLATFORM_REFERRAL_FEE = 0.0025

export const PLATFORM_ALLOW_REFERRER_REMOVAL = true

// ======================================================
// UI / THEME CONFIG
// ======================================================

export const UI_THEME = {
  name: 'Lucky20 Vegas Neon',
  
  colors: {
    primary: '#8B5CF6',
    secondary: '#A855F7',
    accent: '#C084FC',
    background: '#09090F',
    surface: 'rgba(255,255,255,0.08)',
    glass: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.12)',
    text: '#FFFFFF',
    muted: '#A1A1AA',
    success: '#22C55E',
    danger: '#EF4444',
    warning: '#F59E0B',
  },

  effects: {
    glassmorphism: true,
    neonGlow: true,
    animatedGradients: true,
    hoverLift: true,
    blurEffects: true,
    smoothTransitions: true,
    particleEffects: true,
    jackpotPulse: true,
    animatedCards: true,
    floatingOrbs: true,
    shimmerButtons: true,
  },

  shadows: {
    neonPurple: '0 0 25px rgba(168,85,247,0.45)',
    neonPink: '0 0 30px rgba(192,132,252,0.35)',
    glassShadow: '0 8px 32px rgba(0,0,0,0.35)',
  },

  gradients: {
    primary:
      'linear-gradient(135deg,#6D28D9 0%,#9333EA 50%,#C084FC 100%)',

    background:
      'radial-gradient(circle at top,#1E1B4B 0%,#09090F 45%,#050508 100%)',

    card:
      'linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))',
  },
}

// ======================================================
// HELPER FUNCTION
// ======================================================

const lp = (
  tokenMint: PublicKey | string,
  poolAuthority?: PublicKey | string,
): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority:
    poolAuthority !== undefined
      ? new PublicKey(poolAuthority)
      : undefined,
})

// ======================================================
// SUPPORTED POOLS
// ======================================================

export const POOLS = [
  lp(FAKE_TOKEN_MINT),

  lp('So11111111111111111111111111111111111111112'),

  lp('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),

  lp('85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'),

  lp(
    'So11111111111111111111111111111111111111112',
    'Fki4Yah4ZXvFmDUw8WspxRAEmfERPth7PPEwPYt3bior',
  ),
]

// Default Pool
export const DEFAULT_POOL = POOLS[0]

// ======================================================
// TOKEN METADATA
// ======================================================

export const TOKEN_METADATA: (
  Partial<TokenMeta> & { mint: PublicKey }
)[] = [
  {
    mint: FAKE_TOKEN_MINT,
    name: 'Lucky Credits',
    symbol: 'LUCK',
    image: '/lucky20-token.png',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0,
  },

  {
    mint: new PublicKey(
      '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ',
    ),
    name: 'Wormhole',
    symbol: 'W',
    image: 'https://wormhole.com/token.png',
    baseWager: 1e6,
    decimals: 6,
    usdPrice: 0,
  },
]

// ======================================================
// TERMS OF SERVICE
// ======================================================

export const TOS_HTML = `
  <div style="font-family:sans-serif;color:white;">
    <h2>Lucky20 Terms & Conditions</h2>

    <p><b>1. Age Requirement:</b> Users must be 18 years or older.</p>

    <p><b>2. Responsible Participation:</b> Play responsibly and within your financial limits.</p>

    <p><b>3. Compliance:</b> Users are responsible for ensuring compliance with local laws and regulations.</p>

    <p><b>4. Digital Entertainment:</b> Lucky20 provides blockchain-based digital gaming experiences.</p>

    <p><b>5. Risk Disclosure:</b> Outcomes are random and winnings are never guaranteed.</p>

    <p><b>6. Security:</b> We prioritize platform integrity, fairness, and user protection.</p>

    <p><b>7. Privacy:</b> User data is handled securely and responsibly.</p>

    <p><b>8. Fair Gameplay:</b> Platform systems operate transparently and fairly.</p>

    <p><b>9. Limitation of Liability:</b> Services are provided "as available" without guarantees.</p>
  </div>
`

// ======================================================
// TOKEN FETCHER
// ======================================================

export const TOKEN_METADATA_FETCHER = (() => {
  if (import.meta.env.VITE_HELIUS_API_KEY) {
    return makeHeliusTokenFetcher(
      import.meta.env.VITE_HELIUS_API_KEY,
      {
        dollarBaseWager: 1,
      },
    )
  }
})()

// ======================================================
// PLATFORM FEATURES
// ======================================================

export const ENABLE_LEADERBOARD = true
export const ENABLE_TROLLBOX = false

export const FEATURED_GAME_INLINE = false

export const FEATURED_GAME_ID: string | undefined = 'jackpot'

// ======================================================
// EXTRA UI EFFECT FLAGS
// ======================================================

export const ENABLE_EFFECTS = {
  animatedBackground: true,
  glassNavbar: true,
  neonButtons: true,
  floatingJackpotBanner: true,
  animatedSidebar: true,
  hoverGlow: true,
  shimmerCards: true,
  dynamicParticles: true,
  liveActivityFeed: true,
  bigWinPopup: true,
  smoothPageTransitions: true,
  premiumVegasMode: true,
}
