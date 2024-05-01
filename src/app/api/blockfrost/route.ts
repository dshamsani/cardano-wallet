import { BlockFrostAPI } from '@blockfrost/blockfrost-js'
import { NextResponse } from 'next/server'

const blockfrostClient = new BlockFrostAPI({
  projectId: 'mainnetRUrPjKhpsagz4aKOCbvfTPHsF0SmwhLc'
})

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const addresses = await blockfrostClient.addresses(id as string)
  return NextResponse.json(addresses)
}
