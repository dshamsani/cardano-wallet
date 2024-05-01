export interface WalletInfoAmountItem {
  unit: string
  quantity: string
}

export interface WalletInfoAssets {
  asset: string
  quantity: string
}

export interface WalletInfoAddresses {
  address: string
  amount: WalletInfoAmountItem[]
  script: boolean
  stake_address: string
  type: 'byron' | 'shelley'
}

export interface WalletInfo {
  addresses: WalletInfoAddresses
  assets: WalletInfoAssets[]
}

interface AssetItemInfoOnChainMetaData {
  name: string
  color: string
  image: string
  [key: string]: any
}

interface AssetItemInfoMetaData {
  name: string
  description: string
  ticker: string | null
  url: string | null
  logo: string | null
  decimals: number | null
}

export interface AssetItemInfo {
  assetById: {
    asset: string
    policy_id: string
    asset_name: string
    fingerprint: string
    quantity: string
    initial_mint_tx_hash: string
    mint_or_burn_count: number
    onchain_metadata: AssetItemInfoOnChainMetaData | null
    onchain_metadata_standard: string | null
    onchain_metadata_extra: string | null
    metadata: AssetItemInfoMetaData | null
  }
}
