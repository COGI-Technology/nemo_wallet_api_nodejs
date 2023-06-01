# nemo_api.SubgraphApi

Phương thức | Yêu cầu HTTP | Mô tả
------------- | ------------- | -------------
[**call**](SubgraphApi.md#call) | **POST** /subgraph/call | Thực thi một truy vấn GraphQL trên subgraph
[**getTotalVolume**](SubgraphApi.md#gettotalvolume) | **POST** /subgraph/getTotalVolume | Tính tổng khối lượng của thị trường trên subgraph

# **call**
> Promise<{ response: AxiosResponse; body: any }> call(params)

Thực thi một truy vấn GraphQL.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// bỏ chú thích ở dòng tiếp theo để thay đổi base path
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

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **params** | **any**| Các tham số để yêu cầu POST đến GraphQL | 

### Kiểu trả về

Promise<{ response: AxiosResponse; body: any }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **getTotalVolume**
> Promise<{ response: AxiosResponse; body: any }> getTotalVolume(params)

Lấy tổng khối lượng của thị trường trên subgraph.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// bỏ chú thích ở dòng tiếp theo để thay đổi base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.SubgraphApi(client);
const params = "<variables>"
api.getTotalVolume(params)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **params** | **any**| Các biến cho phép bạn tham số hóa các truy vấn và sửa đổi | 

### Kiểu trả về

Promise<{ response: AxiosResponse; body: any }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)