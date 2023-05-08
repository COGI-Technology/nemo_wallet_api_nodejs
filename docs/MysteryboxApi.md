# nemo_api.MysteryboxApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**mint**](MysteryboxApi.md#mint) | **POST** /mysterybox/mint | Send a transaction to mint an NFT BOX and transfer it to an account, executed by the minter. Get UUID of NFT if successful
[**mints**](MysteryboxApi.md#mints) | **POST** /mysterybox/mints | Send batch transaction to mint multiple NFT BOX, executed by the minter

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(boxId, recipient, metadata, callback)

Mint an NFT BOX.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.MysteryBoxApi(client);
const recipient: string = "<A Ethereum address>"
const boxId: string = "<boxId>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
api.mint(boxId, recipient, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boxId** | **string**| Box ID | 
 **recipient** | **string**| Account | 
 **metadata** | **any**| Metadata object | 
 **callback** | **string**| Callback uri | 

### Return type

Promise<{ response: AxiosResponse; body: string }>

### Authorization

[apiv2](../README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mints**
> Promise<{ response: AxiosResponse; body: Array<any> }> mints(boxes)

Mint batch NFT Box.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.MysteryBoxApi(client);
const recipient: string = "<A Ethereum address>"
const boxId: string = "<boxId>"
const metadata: any = "<land metadata>"
const callback: string = "<callback url>"
const boxes = api.buildBatchMintData(
    [boxId],
    [recipient],
    [metadata],
    [callback]
)
api.mints(boxes)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **boxes** | **Array<any>**| List of mint parameters | 

### Return type

Promise<{ response: AxiosResponse; body: Array<any> }>

### Authorization

[apiv2](../README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)