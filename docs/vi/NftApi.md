# nemo_api.NftApi

Phương thức | Yêu cầu HTTP | Mô tả
------------- | ------------- | -------------
[**mint**](NftApi.md#mint) | **POST** /nft/mint | Gửi một giao dịch để tạo một NFT và chuyển nó cho một tài khoản, được thực thi bởi Minter. Nhận UUID của NFT nếu thành công
[**requestMint**](NftApi.md#requestMint) | **POST** /nft/request_mint | Gửi một giao dịch để tạo một NFT và chuyển nó cho một tài khoản, được thực thi bởi người dùng. Nhận UUID của NFT nếu thành công

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(recipient, metadata, callback)

Đúc một NFT.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NFTApi(client);
const recipient: string = "<Địa chỉ Ethereum>"
const metadata: any = "<land metadata>"
const callback: string = "<đường dẫn callback url>"
api.mint(recipient, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Tài khoản | 
 **metadata** | **any**| Metadata của NFT | 
 **callback** | **string**| Đường dẫn callback | 

### Kiểu trả về

Promise<{ response: AxiosResponse; body: string }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **requestMint**
> Promise<{ response: AxiosResponse; body: string }> requestMint(recipient, metadata, callback)

Yêu cầu tạo một NFT.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.NFTApi(client);
const recipient: string = "<Địa chỉ Ethereum>"
const metadata: any = "<land metadata>"
const callback: string = "<đường dẫn callback url>"
api.requestMint(recipient, metadata, callback)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Tài khoản | 
 **metadata** | **any**| Metadata của NFT | 
 **callback** | **string**| Đường dẫn callback | 

### Kiểu trả về

Promise<{ response: AxiosResponse; body: string }> 

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **mints**
> Promise<{ response: AxiosResponse; body: Array<any> }> mints(nfts)

Đúc hàng loạt NFT.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.MysteryBoxApi(client);
const nfts: Array<any> = "<list of nfts>"
api.mints(nfts)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **payload** | **Array<any>**| Danh sách các tham số của mint | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<any> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)