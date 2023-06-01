# nemo_api.NftApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**mint**](NftApi.md#mint) | **POST** /nft/mint | Send a transaction to mint an NFT and transfer it to an account, executed by the minter. Get UUID of NFT if successful
[**requestMint**](NftApi.md#requestMint) | **POST** /nft/request_mint | Send a transaction to mint an NFT and transfer it to an account, executed by the user. Get UUID of NFT if successful

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(recipient, metadata, callback)

Mint an NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NFTApi(client);
const recipient: string = "<A Ethereum address>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
api.mint(recipient, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Account | 
 **metadata** | **any**| Metadata object | 
 **callback** | **string**| Callback uri | 

### Return type

Promise<{ response: AxiosResponse; body: string }> 

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **requestMint**
> Promise<{ response: AxiosResponse; body: string }> requestMint(recipient, metadata, callback)

Request mint an NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NFTApi(client);
const recipient: string = "<A Ethereum address>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
api.requestMint(recipient, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Account | 
 **metadata** | **any**| Metadata object | 
 **callback** | **string**| Callback uri | 

### Return type

Promise<{ response: AxiosResponse; body: string }> 

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)