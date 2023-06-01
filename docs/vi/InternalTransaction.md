# InternalTransaction

Thông tin của một giao dịch như charge, award.
## Properties
Tên | Kiểu dữ liệu | Mô tả | Ghi chú
------------ | ------------- | ------------- | -------------
**account** | **string** | Địa chỉ Ethereum của tài khoản | [tùy chọn] [mặc định là undefined]
**txHash** | **string** | Mã định danh duy nhất được sử dụng để theo dõi và xác minh giao dịch | [tùy chọn] [mặc định là undefined]
**amount** | **string** | Số lượng token được sử dụng trong giao dịch | [tùy chọn] [mặc định là undefined]
**kind** | **number** | Loại của giao dịch như rút tiền, gửi tiền, v.v. | [tùy chọn] [mặc định là undefined]

## Enum: InternalTransaction.Kind

* `INTERNAL` (giá trị: `'207'`)

* `ONCHAIN` (giá trị: `'203'`)

* `OFFCHAIN` (giá trị: `'202'`)

* `WITHDRAW` (giá trị: `'201'`)

* `DEPOSIT` (giá trị: `'200'`)

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)


