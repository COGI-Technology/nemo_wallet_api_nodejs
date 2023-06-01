# nemo_api.NemoIdApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](NemoIdApi.md#login) | **POST** /nemoid/login | Login and get NemoIdAccount's information
[**userInfo**](NemoIdApi.md#userInfo) | **POST** /nemoid/user_info | Get NemoIdAccount's information
[**relogin**](NemoIdApi.md#relogin) | **POST** /nemoid/relogin | Relogin and get NemoIdAccount's information

# **login**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> login(code, codeVerifier, redirectURI)

Login.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NemoIdApi(client);
const code: string = "<code>"
const codeVerifier: string = "<code verifier>"
const redirectURI: string = "<redirect uri>"
api.login(code, codeVerifier, redirectURI)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **string**| Authorization code | 
 **codeVerifier** | **string**| Code verifier | 
 **redirectURI** | **string**| Redirect URI | 

### Return type

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **userInfo**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> userInfo(accessToken)

Get NemoIdAccount's information by accessToken.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NemoIdApi(client);
const accessToken: string = "<access token>"
api.userInfo(accessToken)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **string**| Access token | 

### Return type

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

# **relogin**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> relogin(refreshToken, codeVerifier)

Relogin.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NemoIdApi(client);
const refreshToken: string = "<refresh token>"
const codeVerifier: string = "<code verifier>"
api.relogin(refreshToken, codeVerifier)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshToken** | **string**| Refresh token | 
 **codeVerifier** | **string**| Code verifier | 

### Return type

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Authorization

[apiv2](./README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](./README.md#documentation-for-api-endpoints) [[Back to Model list]](./README.md#documentation-for-models) [[Back to README]](./README.md)

