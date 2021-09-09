export interface Version {
  readonly major: number
  readonly minor: number
  readonly patch: number
}

export interface Tags {
  readonly [tagId: string]: {
    readonly name: string
    readonly description: string
  }
}

export interface ABIIdentifier {
  readonly version: string
  readonly type: string
}

export interface ContractIdentifier {
  readonly chainId: number
  readonly address: string
}

export interface Contract extends ABIIdentifier, ContractIdentifier {
  readonly abi: object[]
  readonly tags?: string[]
  readonly extensions?: {
    readonly [key: string]: ContractIdentifier | ABIIdentifier | string | number | boolean | null
  }
}

export interface ContractList {
  name: string
  version: Version
  tags: Tags
  contracts: Contract[]
}
