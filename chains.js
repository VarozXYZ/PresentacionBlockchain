import { defineChain } from 'viem'
 
export const arbitrum = defineChain({
  id: 42161,
  name: 'Arbitrum',
  nativeCurrency: {
    decimals: 18,
    name: 'Arbitrum',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://1rpc.io/arb'],
      webSocket: [''],
    },
  },
  blockExplorers: {
    default: { name: 'Arbiscan', url: 'https://arbiscan.io/' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 13051,
    },
  },
})

export const hyperTest = defineChain({
    id: 998,
    name: 'HyperEVM Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'Hyperliquid',
      symbol: 'HYPE',
    },
    rpcUrls: {
      default: {
        http: ['https://rpc.hyperliquid-testnet.xyz/evm'],
        webSocket: [''],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://testnet.purrsec.com/' },
    },
    contracts: {
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 13051,
      },
    },
  })