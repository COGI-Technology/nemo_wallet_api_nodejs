# nemo_api.NemoIdApi

Phương thức | Yêu cầu HTTP | Mô tả
------------- | ------------- | -------------
[**login**](NemoIdApi.md#login) | **POST** /nemoid/login | Đăng nhập và lấy thông tin Tài khoản NemoId
[**userInfo**](NemoIdApi.md#userinfo) | **POST** /nemoid/user_info | Lấy thông tin Tài khoản NemoId
[**relogin**](NemoIdApi.md#relogin) | **POST** /nemoid/relogin | Đăng nhập lại và lấy thông tin Tài khoản NemoId

# **login**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> login(code, codeVerifier, redirectURI)

Đăng nhập.

### Ví dụ

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

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **code** | **string**| Mã xác thực | 
 **codeVerifier** | **string**| Mã xác thực | 
 **redirectURI** | **string**| Địa chỉ URL chuyển hướng | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **userInfo**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> userInfo(accessToken)

Lấy thông tin Tài khoản NemoId bằng accessToken.

### Ví dụ

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

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **accessToken** | **string**| Access token | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

# **relogin**
> Promise<{ response: AxiosResponse; body: NemoIdAccount }> relogin(refreshToken, codeVerifier)

Đăng nhập lại.

### Ví dụ

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

### Tham số

| Tên | Kiểu dữ liệu | Mô tả | Ghi chú |
------------- | ------------- | ------------- | -------------
 **refreshToken** | **string**| Refresh token | 
 **codeVerifier** | **string**| Mã xác thực | 

### Kiểu kết quả trả về

Promise<{ response: AxiosResponse; body: [NemoIdAccount](NemoIdAccount.md) }>

### Xác thực

[apiv2](./README.md#apiv2)

### HTTP request headers

### Chi tiết phản hồi của yêu cầu HTTP

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)

