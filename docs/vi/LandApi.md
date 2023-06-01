# nemo_api.LandApi

Phương thức | Yêu cầu HTTP | Mô tả
------------- | ------------- | -------------
[**mint**](LandApi.md#mint) | **POST** /land/mint | Đúc NFT Land và chuyển nó cho một tài khoản, được thực hiện bởi Minter. Nhận UUID của NFT Land nếu thành công.
[**requestMint**](LandApi.md#requestmint) | **POST** /land/request_mint | Đúc NFT Land và chuyển nó cho một tài khoản, được thực hiện bởi người dùng. Nhận UUID của NFT Land nếu thành công.
[**mints**](LandApi.md#mints) | **POST** /land/mints | Gửi giao dịch để tạo ra nhiều NFT Land, được thực hiện bởi Minter.
[**requestMints**](LandApi.md#requestmints) | **POST** /land/request_mints | Gửi giao dịch để tạo ra nhiều NFT Land, được thực hiện bởi người dùng.
[**requestCancelbuys**](LandApi.md#requestcancelbuys) | **POST** /land/request_cancelbuys | Gửi yêu cầu hủy giao dịch mua hàng.

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(recipient, landId, level, landX, landY, metadata, callback)

Tạo một NFT Land.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Sự mô tả | Ghi chú
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Tài khoản | 
 **landId** | **string**| Id Land | 
 **level** | **string**| Cấp độ Land | 
 **landX** | **string**| Vị trí X | 
 **landY** | **string**| Vị trí Y | 
 **metadata** | **any**| Dữ liệu phân loại Land (Metadata) | 
 **callback** | **string**| URI Callback| 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: string }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **requestMint**
> Promise<{ response: AxiosResponse; body: string }> requestMint(recipient, landId, level, landX, landY, metadata, callback)

Yêu cầu đúc một NFT.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **recipient** | **string**| Tài khoản | 
 **landId** | **string**| id Land | 
 **level** | **string**| Cấp độ Land | 
 **landX** | **string**| Vị trí X | 
 **landY** | **string**| Vị trí Y | 
 **metadata** | **any**| Metadata của Land | 
 **callback** | **string**| URI gọi lại |

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: string }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **mints**
> Promise<{ response: AxiosResponse; body: Array<any> }> mints(lands)

Đúc NFT hàng loạt.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Mô tả | Ghi chú
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| Danh sách các tham số để khởi tạo | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<any> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **requestMints**
> Promise<{ response: AxiosResponse; body: Array<any> }> requestMints(lands)

Mint NFT hàng loạt.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Mô tả | Ghi chú
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| Danh sách các tham số để khởi tạo | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<any> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **requestCancelbuys**
> Promise<{ response: AxiosResponse; body: Array<any> }> requestCancelbuys(lands)

Yêu cầu hủy lệnh mua NFT.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Mô tả | Ghi chú
------------- | ------------- | ------------- | -------------
 **lands** | **Array<any>**| Danh sách của các đối tượng gồm account và cid | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<any> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)