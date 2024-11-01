export const AIRDROP_TOKEN_ADDRESS = process.env.AIRDROP_TOKEN_ADDRESS as `0x${string}`
export const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY as `0x${string}`
export const WEBSITE_URL = process.env.WEBSITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
export const SUPABASE_URL = process.env.SUPABASE_URL!
export const SUPABASE_KEY = process.env.SUPABASE_KEY!
export const NEYNAR_API_KEY= process.env.NEYNAR_API_KEY!
export const NEYNAR_CLIENT_ID= process.env.NEYNAR_CLIENT_ID!