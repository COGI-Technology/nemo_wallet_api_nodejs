# nemo_api.LandApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**mint**](LandApi.md#mint) | **POST** /land/mint | Send a transaction to mint an NFT Land and transfer it to an account, executed by the minter. Get UUID of NFT Land if successful
[**requestMint**](LandApi.md#requestMint) | **POST** /land/request_mint | Send a transaction to mint an NFT Land and transfer it to an account, executed by the user. Get UUID of NFT Land if successful
[**mints**](LandApi.md#mints) | **POST** /land/mints | Send batch transaction to mint multiple NFT Land, executed by the minter
[**requestMints**](LandApi.md#requestMints) | **POST** /land/request_mints | Send batch transaction to mint multiple NFT Land, executed by the user
[**requestCancelbuys**](LandApi.md#requestCancelbuys) | **POST** /land/request_cancelbuys | Send batch request cancel buy

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(recipient, landId, level, landX, landY, metadata, callback)

Mint an NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.LandApi(client);
const recipient: string = "<A Ethereum address>"
const landId: string = "<land id>"
const level: string = "<land level>"
const landX: string = "<land X>"
const landY: string = "<land Y>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
api.mint(recipient, landId, level, landX, landY, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Account | 
 **landId** | **string**| Land id | 
 **level** | **string**| Land level | 
 **landX** | **string**| Position X | 
 **landY** | **string**| Position Y | 
 **metadata** | **any**| Land Metadata | 
 **callback** | **string**| Callback uri | 

### Return type

Promise<{ response: AxiosResponse; body: string }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **requestMint**
> Promise<{ response: AxiosResponse; body: string }> requestMint(recipient, landId, level, landX, landY, metadata, callback)

Request mint an NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.LandApi(client);
const recipient: string = "<A Ethereum address>"
const landId: string = "<land id>"
const level: string = "<land level>"
const landX: string = "<land X>"
const landY: string = "<land Y>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
api.requestMint(recipient, landId, level, landX, landY, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Account | 
 **landId** | **string**| Land id | 
 **level** | **string**| Land level | 
 **landX** | **string**| Position X | 
 **landY** | **string**| Position Y | 
 **metadata** | **any**| Land Metadata | 
 **callback** | **string**| Callback uri | 

### Return type

Promise<{ response: AxiosResponse; body: string }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **mints**
> Promise<{ response: AxiosResponse; body: Array<any> }> mints(lands)

Mint batch NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.LandApi(client);
const recipient: string = "<A Ethereum address>"
const landId: string = "<land id>"
const level: string = "<land level>"
const landX: string = "<land X>"
const landY: string = "<land Y>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
const lands = api.buildBatchMintData(
    [recipient],
    [landId],
    [level],
    [landX],
    [landY],
    [metadata],
    [callback]
)
api.mints(lands)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| List of mint parameters | 

### Return type

Promise<{ response: AxiosResponse; body: Array<any> }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **requestMints**
> Promise<{ response: AxiosResponse; body: Array<any> }> requestMints(lands)

Mint batch NFT.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.LandApi(client);
const recipient: string = "<A Ethereum address>"
const landId: string = "<land id>"
const level: string = "<land level>"
const landX: string = "<land X>"
const landY: string = "<land Y>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
const lands = api.buildBatchMintData(
    [recipient],
    [landId],
    [level],
    [landX],
    [landY],
    [metadata],
    [callback]
)
api.requestMints(lands)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| List of mint parameters | 

### Return type

Promise<{ response: AxiosResponse; body: Array<any> }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **requestCancelbuys**
> Promise<{ response: AxiosResponse; body: Array<any> }> requestCancelbuys(lands)

Request batch cancel buy.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.LandApi(client);
const lands: any = [
    {
        account: "<A Ethereum address>",
        cid: "<CID>"
    }
]
api.requestCancelbuys(lands)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| The list of objects includes attributes for both account and cid | 

### Return type

Promise<{ response: AxiosResponse; body: Array<any> }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)