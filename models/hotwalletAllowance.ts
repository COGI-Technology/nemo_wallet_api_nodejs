export class HotwalletAllowance {
    /**
     * Account is an Ethereum address
     */
    'account'?: string
    /**
     * Spender
     */
    'spender'?: string
    /**
     * Amount
     */
    'amount'?: string

    static discriminator: string | undefined = undefined

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'account',
            baseName: 'account',
            type: 'string',
        },
        {
            name: 'spender',
            baseName: 'spender',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
    ]

    static getAttributeTypeMap() {
        return HotwalletAllowance.attributeTypeMap
    }
}
