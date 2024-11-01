import { createPublicClient, createWalletClient, http } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { base } from "viem/chains"
import { WALLET_PRIVATE_KEY } from "./constants"

export const chain = base

export const account = privateKeyToAccount(
  WALLET_PRIVATE_KEY
)

export const walletClient = createWalletClient({
  account,
  chain,
  transport: http(),
})

export const publicClient = createPublicClient({
  chain,
  transport: http(),
})
