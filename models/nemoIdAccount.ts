export class NemoIdAccount {
    /**
     * Sub
     */
    'sub'?: string
    /**
     * Email
     */
    'email'?: string
    /**
     * Email verified
     */
    'emailVerified'?: boolean
    /**
     * Name
     */
    'name'?: string
    /**
     * Gender
     */
    'gender'?: string
    /**
     * Birthday
     */
    'birthday'?: string
    /**
     * Profile picture
     */
    'profilePicture'?: string
    /**
     * Public key
     */
    'publicKey'?: string
    /**
     * Redirect URI
     */
    'redirectURI'?: string
    /**
     * Client ID
     */
    'clientID'?: string
    /**
     * Access token
     */
    'accessToken'?: string
    /**
     * Expires in
     */
    'expiresIn'?: number
    /**
     * Id token
     */
    'idToken'?: string
    /**
     * Refresh token
     */
    'refreshToken'?: string
    /**
     * Token type
     */
    'tokenType'?: string
    /**
     * Google two factor authentication
     */
    'googleTwoFactorAuthentication'?: boolean
    /**
     * Fund password
     */
    'fundPassword'?: boolean
    /**
     * Signature
     */
    'signature'?: string
    /**
     * Nemo address
     */
    'nemoAddress'?: string
    /**
     * Wallet addresses
     */
    'walletAddress'?: Array<string>

    static discriminator: string | undefined = undefined

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'sub',
            baseName: 'sub',
            type: 'string',
        },
        {
            name: 'email',
            baseName: 'email',
            type: 'string',
        },
        {
            name: 'emailVerified',
            baseName: 'email_verified',
            type: 'boolean',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'gender',
            baseName: 'gender',
            type: 'string',
        },
        {
            name: 'birthday',
            baseName: 'birthday',
            type: 'string',
        },
        {
            name: 'profilePicture',
            baseName: 'profile_picture',
            type: 'string',
        },
        {
            name: 'publicKey',
            baseName: 'public_key',
            type: 'string',
        },
        {
            name: 'redirectURI',
            baseName: 'redirect_uri',
            type: 'string',
        },
        {
            name: 'clientID',
            baseName: 'client_id',
            type: 'string',
        },
        {
            name: 'accessToken',
            baseName: 'access_token',
            type: 'string',
        },
        {
            name: 'expiresIn',
            baseName: 'expires_in',
            type: 'number',
        },
        {
            name: 'idToken',
            baseName: 'id_token',
            type: 'string',
        },
        {
            name: 'refreshToken',
            baseName: 'refresh_token',
            type: 'string',
        },
        {
            name: 'tokenType',
            baseName: 'token_type',
            type: 'string',
        },
        {
            name: 'googleTwoFactorAuthentication',
            baseName: 'google_two_factor_authentication',
            type: 'boolean',
        },
        {
            name: 'fundPassword',
            baseName: 'fund_password',
            type: 'boolean',
        },
        {
            name: 'signature',
            baseName: 'signature',
            type: 'string',
        },
        {
            name: 'nemoAddress',
            baseName: 'nemo_address',
            type: 'string',
        },
        {
            name: 'walletAddress',
            baseName: 'wallet_address',
            type: 'Array<string>',
        },
    ]

    static getAttributeTypeMap() {
        return NemoIdAccount.attributeTypeMap
    }
}
