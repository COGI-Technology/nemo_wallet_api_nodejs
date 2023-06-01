# nemo_api.NemoAccountApi

| Phương thức   | Yêu cầu HTTP     | Mô tả |
------------- | ------------- | -------------
[**getLink**](NemoAccountApi.md#getlink) | **POST** /account/get_link | Lấy danh sách địa chỉ ví Metamask đã liên kết với Nemo wallet
[**getNemoWallet**](NemoAccountApi.md#getnemowallet) | **POST** /account/get_nemo_wallet | Lấy địa chỉ ví Nemo bằng địa chỉ ví Metamask đã liên kết

# **getLink**
> Promise<{ response: AxiosResponse; body: Array<string> }> getLink(mainAccount)

Lấy danh sách địa chỉ ví Metamask đã liên kết với Nemo wallet.

### Ví dụ

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

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **mainAccount** | **string**| Địa chỉ ví NEMO | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<string> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **getNemoWallet**
> Promise<{ response: AxiosResponse; body: any }> getNemoWallet(subAccount)

Lấy địa chỉ ví Nemo bằng địa chỉ ví Metamask đã liên kết.

### Ví dụ

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

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **subAccount** | **string**| Địa chỉ ví Metamasks | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: any }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)