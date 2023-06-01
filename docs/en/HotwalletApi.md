# nemo_api.HotwalletApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**balance**](HotwalletApi.md#balance) | **POST** /hotwallet/balance | Account's hotwallet information
[**charge**](HotwalletApi.md#charge) | **POST** /hotwallet/charge | Deduct balance from the user's account
[**award**](HotwalletApi.md#award) | **POST** /hotwallet/award | Award token to user
[**getAllowance**](HotwalletApi.md#getAllowance) | **POST** /hotwallet/get_allowance | Get user's approval for the service

# **balance**
> Promise<{ response: AxiosResponse; body: AccountBalance }> balance(account)

Account's hotwallet information.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<A  Ethereum address>"
api.balance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Account | 


### Return type

Promise<{ response: AxiosResponse; body: AccountBalance }> [AccountBalance](AccountBalance.md)

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **charge**
> Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> charge(account, amount)

Deduct balance from the user's account

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<A  Ethereum address>"
const amount = 1
api.charge(user, amount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Account | 
 **amount** | **number**| Amount | 

### Return type

Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> [InternalTransaction](InternalTransaction.md); [AccountBalance](AccountBalance.md)

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **award**

> Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> award(account, amount)


Award token to user

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<A  Ethereum address>"
const amount = 1
api.award(user, amount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Account | 
 **amount** | **number**| Amount | 

### Return type

Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> [InternalTransaction](InternalTransaction.md); [AccountBalance](AccountBalance.md)

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **getAllowance**
> Promise<{ response: AxiosResponse; body: HotwalletAllowance }> getAllowance(account)

Get user's approval for the service.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<A  Ethereum address>"
api.getAllowance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **string**| Account | 

### Return type

Promise<{ response: AxiosResponse; body: HotwalletAllowance }> [HotwalletAllowance](HotwalletAllowance.md)

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)