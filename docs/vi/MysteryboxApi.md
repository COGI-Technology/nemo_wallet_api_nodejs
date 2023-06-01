# nemo_api.MysteryboxApi

| Phương thức   | Yêu cầu HTTP     | Mô tả |
| -------------- | ---------------- | ---------------------------------------------------------- |
| **mint**       | **POST** /mysterybox/mint    | Gửi một giao dịch tạo một NFT BOX và chuyển nó đến một tài khoản, được thực thi bởi Minter. Trả về UUID của NFT nếu thành công. |
| **mints**      | **POST** /mysterybox/mints   | Gửi các giao dịch tạo nhiều NFT BOX, được thực hiện bởi Minter. | 

# **mint**
> Promise<{ response: AxiosResponse; body: string }> mint(boxId, recipient, metadata, callback)

Đúc một NFT BOX.

### Ví dụ

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

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
| -------------- | ---------------- | ---------------------------------------------------------- | -------------
| **boxId**       | **string**        | ID của hộp | 
| **recipient**   | **string**        | Tài khoản nhận | 
| **metadata**    | **any**           | Metadata của NFT | 
| **callback**    | **string**        | Địa chỉ URI của callback | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: string }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **mints**
> Promise<{ response: AxiosResponse; body: Array<any> }> mints(boxes)

Đúc hàng loạt NFT Box.

### Ví dụ

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

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **boxes** | **Array<any>**| Danh sách các tham số của mint | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: Array<any> }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)