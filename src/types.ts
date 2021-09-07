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

export interface ContractMetadata {
  readonly abi: ABIIdentifier
  readonly tags?: string[]
  readonly extensions?: {
    readonly [key: string]: ABIIdentifier | string | number | boolean | null
  }
}

export interface Contract extends ContractIdentifier, ContractMetadata {}
