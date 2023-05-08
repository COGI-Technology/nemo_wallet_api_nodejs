# nemo_api.SubgraphApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**call**](SubgraphApi.md#call) | **POST** /subgraph/call | Execute a GraphQL query on subgraph
[**getTotalVolume**](SubgraphApi.md#getTotalVolume) | **POST** /subgraph/getTotalVolume | Calculate the total volume of the marketplace on the subgraph

# **call**
> Promise<{ response: AxiosResponse; body: any }> call(params)

Execute a GraphQL query.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.SubgraphApi(client);
const params = {
    variables: "<variables>",
    query: "<query>"
}
api.call(params)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **any**| The body parameters to make a POST request to GraphQL | 

### Return type

Promise<{ response: AxiosResponse; body: any }>

### Authorization

[apiv2](../README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTotalVolume**
> Promise<{ response: AxiosResponse; body: any }> getTotalVolume(params)

Get the total volume of the marketplace on the subgraph.

### Example

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.SubgraphApi(client);
const params = "<variables>"
api.getTotalVolume(params)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | **any**| Variables allow you to parameterize your queries and mutations | 

### Return type

Promise<{ response: AxiosResponse; body: any }>

### Authorization

[apiv2](../README.md#apiv2)

### HTTP request headers

### HTTP response details

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)