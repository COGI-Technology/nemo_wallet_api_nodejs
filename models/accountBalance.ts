export class AccountBalance {
    /**
     * Account is an Ethereum address
     */
    'account'?: string
    /**
     * Balance
     */
    'balance'?: string
    /**
     * Available balance
     */
    'availableBalance'?: string
    /**
     * Pending balance
     */
    'pendingBalance'?: string
    /**
     * Pending claim
     */
    'pendingClaim'?: string

    static discriminator: string | undefined = undefined

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'account',
            baseName: 'account',
            type: 'string',
        },
        {
            name: 'balance',
            baseName: 'balance',
            type: 'string',
        },
        {
            name: 'availableBalance',
            baseName: 'available_balance',
            type: 'string',
        },
        {
            name: 'pendingBalance',
            baseName: 'pending_balance',
            type: 'string',
        },
        {
            name: 'pendingClaim',
            baseName: 'pending_claim',
            type: 'string',
        },
    ]

    static getAttributeTypeMap() {
        return AccountBalance.attributeTypeMap
    }
}
