export class InternalTransaction {
    /**
     * Account is an Ethereum address
     */
    'account'?: string
    /**
     * tx hash
     */
    'txHash'?: string
    /**
     * Amount
     */
    'amount'?: string
    /**
     * Kind
     */
    'kind'?: InternalTransaction.Kind

    static discriminator: string | undefined = undefined

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'account',
            baseName: 'account',
            type: 'string',
        },
        {
            name: 'txHash',
            baseName: 'tx_hash',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'kind',
            baseName: 'kind',
            type: 'AccountBalance.Kind',
        },
    ]

    static getAttributeTypeMap() {
        return InternalTransaction.attributeTypeMap
    }
}

export namespace InternalTransaction {
    export enum Kind {
        INTERNAL = <any>207,
        ONCHAIN = <any>203,
        OFFCHAIN = <any>202,
        WITHDRAW = <any>201,
        DEPOSIT = <any>200,
    }
}
