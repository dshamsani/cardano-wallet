import { BlockFrostAPI } from '@blockfrost/blockfrost-js'
import { NextResponse } from 'next/server'

const blockfrostClient = new BlockFrostAPI({
  projectId: 'mainnetRUrPjKhpsagz4aKOCbvfTPHsF0SmwhLc'
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const asset = searchParams.get('asset')

  if (id) {
    const addresses = await blockfrostClient.addresses(id as string)
    let assets = {}

    assets = await blockfrostClient.assets()

    return NextResponse.json({ addresses, assets })
  }

  if (asset) {
    const assetById = await blockfrostClient.assetsById(asset)

    return NextResponse.json({ assetById })
  }
}
