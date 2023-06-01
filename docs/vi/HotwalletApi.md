# nemo_api.HotwalletApi

Phương thức | Yêu cầu HTTP | Mô tả
------------- | ------------- | -------------
[**balance**](HotwalletApi.md#balance) | **POST** /hotwallet/balance | Thông tin ví nóng của tài khoản
[**charge**](HotwalletApi.md#charge) | **POST** /hotwallet/charge | Trừ tiền từ tài khoản người dùng
[**award**](HotwalletApi.md#award) | **POST** /hotwallet/award | Trao token cho người dùng
[**getAllowance**](HotwalletApi.md#getallowance) | **POST** /hotwallet/get_allowance | Lấy thông tin lượng token của người dùng đã cấp phép cho dịch vụ

# **balance**
> Promise<{ response: AxiosResponse; body: AccountBalance }> balance(account)

Thông tin ví nóng của tài khoản.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<Địa chỉ Ethereum>"
api.balance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **account** | **string**| Tài khoản | 


### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: AccountBalance }> [AccountBalance](AccountBalance.md)

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **charge**
> Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> charge(account, amount)

Trừ tiền từ tài khoản của người dùng.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<Địa chỉ Ethereum>"
const amount = 1
api.charge(user, amount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **account** | **string**| Tài khoản | 
 **amount** | **number**| Số tiền | 

### Kiểu kết quả trả về

Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> [InternalTransaction](InternalTransaction.md); [AccountBalance](AccountBalance.md)

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **award**

> Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> award(account, amount)

Trao token cho người dùng.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<Địa chỉ Ethereum>"
const amount = 1
api.award(user, amount)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **account** | **string**| Tài khoản | 
 **amount** | **number**| Số tiền | 

### Kiểu kết quả trả về

Promise<{
    response: AxiosResponse
    body: { transaction: InternalTransaction; accountBalance: AccountBalance }
}> [InternalTransaction](InternalTransaction.md); [AccountBalance](AccountBalance.md)

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **getAllowance**
> Promise<{ response: AxiosResponse; body: HotwalletAllowance }> getAllowance(account)

Lấy thông tin lượng token của người dùng đã cấp phép cho dịch vụ.

### Ví dụ

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<Địa chỉ Ethereum>"
api.getAllowance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

### Tham số

Tên | Kiểu dữ liệu | Mô tả  | Ghi chú
------------- | ------------- | ------------- | -------------
 **account** | **string**| Tài khoản | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: HotwalletAllowance }> [HotwalletAllowance](HotwalletAllowance.md)

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)