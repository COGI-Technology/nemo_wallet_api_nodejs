import { HotwalletApi } from './hotwalletApi'
import { LandApi } from './landApi'
import { NemoAccountApi } from './nemoAccountApi'
import { NemoIdApi } from './nemoIdApi'
import { NFTApi } from './nftApi'
import { SubgraphApi } from './subgraphApi'

export * from './apiClient'
export * from './bridgeApi'
export * from './hotwalletApi'
export * from './landApi'
export * from './nemoAccountApi'
export * from './nemoIdApi'
export * from './nftApi'
export * from './onchainApi'
export * from './subgraphApi'

export const APIS = [HotwalletApi, LandApi, NemoAccountApi, NemoIdApi, NFTApi, SubgraphApi]
