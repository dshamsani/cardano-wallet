interface WalletInfoAmountItem {
  unit: string
  quantity: string
}

export interface WalletInfo {
  address: string
  amount: WalletInfoAmountItem[]
  script: boolean
  stake_address: string
  type: 'byron' | 'shelley'
}
