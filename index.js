import { createWalletClient, http, parseEther, parseUnits } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { arbitrum } from './chains.js'

const client = createWalletClient({
  chain: arbitrum,
  transport: http()
})

const account = privateKeyToAccount('0x9849b8ec9c140b940c025e9d419ea1ed32a93a393863b777ac61870f1c7fabac')

const uniswapRouterAddress = '0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24'

const usdcAddress = '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'

const uniswapRouterABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "amountOutMin", "type": "uint256" },
      { "internalType": "address[]", "name": "path", "type": "address[]" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "deadline", "type": "uint256" }
    ],
    "name": "swapExactETHForTokens",
    "outputs": [
      { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }
    ],
    "stateMutability": "payable",
    "type": "function"
  }
]

const amountOutMin = parseUnits('0.1', 6)

const path = [
  '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  usdcAddress
]

const deadline = Math.floor(Date.now() / 1000) + 600

const hash = await client.writeContract({
  address: uniswapRouterAddress,
  abi: uniswapRouterABI,
  functionName: 'swapExactETHForTokens',
  args: [amountOutMin, path, account.address, deadline],
  value: parseEther('0.0001'),
  account
})

console.log(hash)
