# NemoIdAccount

Account's hotwallet information.
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub** | **string** | This is an identifier for the user that is unique among all NEMO ID accounts | [optional] [default to undefined]
**email** | **string** | The email address of the account | [optional] [default to undefined]
**emailVerified** | **boolean** | Whether an email has been verified | [optional] [default to undefined]
**name** | **string** | Username | [optional] [default to undefined]
**gender** | **string** | Gender | [optional] [default to undefined]
**birthday** | **string** | Birthday | [optional] [default to undefined]
**profilePicture** | **string** | Link to the profile picture of the account | [optional] [default to undefined]
**publicKey** | **string** | The public key used to authenticate the JSON-RPC request | [optional] [default to undefined]
**redirectURI** | **string** | Redirect URI | [optional] [default to undefined]
**clientID** | **string** | Client ID | [optional] [default to undefined]
**accessToken** | **string** | Token used to access the service | [optional] [default to undefined]
**expiresIn** | **number** | Time in seconds for the access token's lifespan | [optional] [default to undefined]
**idToken** | **string** | A JWT containing identifying information about the user signed by NEMO ID | [optional] [default to undefined]
**refreshToken** | **string** | Refresh token | [optional] [default to undefined]
**tokenType** | **string** | Token type | [optional] [default to undefined]
**googleTwoFactorAuthentication** | **boolean** | Whether two-factor authentication is enabled | [optional] [default to undefined]
**fundPassword** | **boolean** | Whether the fund password is enabled | [optional] [default to undefined]
**signature** | **object** | The signature response from the server, which is used for JSON-RPC requests | [optional] [default to undefined]
**nemoAddress** | **string** | The Ethereum address of NemoWallet | [optional] [default to undefined]
**walletAddress** | **Array<string>** | The Ethereum addresses of the MetaMask wallets are linked" | [optional] [default to undefined]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


