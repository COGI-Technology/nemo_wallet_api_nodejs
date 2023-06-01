# nemo_api.NemoAccountApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLink**](NemoAccountApi.md#getLink) | **POST** /account/get_link | Get a list of Metamask addresses linked to Nemo Wallet
[**getNemoWallet**](NemoAccountApi.md#getNemoWallet) | **POST** /account/get_nemo_wallet | Get the Nemo Wallet address that is linked from the Metamask address

# **getLink**
> Promise<{ response: AxiosResponse; body: Array<string> }> getLink(mainAccount)

Get a list of Metamask addresses linked to Nemo Wallet.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NemoAccountApi(client);
const mainAccount: string = "<A Ethereum address>"
api.getLink(mainAccount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mainAccount** | **string**| NEMO Wallet address | 

### Return type

Promise<{ response: AxiosResponse; body: Array<string> }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **getNemoWallet**
> Promise<{ response: AxiosResponse; body: any }> getNemoWallet(subAccount)

Get the Nemo Wallet address that is linked from the Metamask address.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NemoAccountApi(client);
const subAccount: string = "<A Ethereum address>"
api.getNemoWallet(subAccount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subAccount** | **string**| Metamask Wallet address | 

### Return type

Promise<{ response: AxiosResponse; body: any }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)