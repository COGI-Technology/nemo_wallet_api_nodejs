# NemoIdAccount

Thông tin tài khoản NemoWallet.
## Các thuộc tính
Tên | Kiểu dữ liệu | Mô tả | Ghi chú
------------ | ------------- | ------------- | -------------
**sub** | **string** | Đây là mã định danh của người dùng, duy nhất trong tất cả các tài khoản NEMO ID  | [tùy chọn] [mặc định là undefined]
**email** | **string** | Địa chỉ email của tài khoản | [tùy chọn] [mặc định là undefined]
**emailVerified** | **boolean** | Xác minh email đã được thực hiện hay chưa | [tùy chọn] [mặc định là undefined]
**name** | **string** | Tên người dùng | [tùy chọn] [mặc định là undefined]
**gender** | **string** | Giới tính | [tùy chọn] [mặc định là undefined]
**birthday** | **string** | Ngày sinh | [tùy chọn] [mặc định là undefined]
**profilePicture** | **string** | Liên kết đến hình ảnh trang cá nhân của tài khoản | [tùy chọn] [mặc định là undefined]
**publicKey** | **string** | Khóa công khai được sử dụng để xác thực yêu cầu JSON-RPC | [tùy chọn] [mặc định là undefined]
**redirectURI** | **string** | URI chuyển hướng | [tùy chọn] [mặc định là undefined]
**clientID** | **string** | ID của Client | [tùy chọn] [mặc định là undefined]
**accessToken** | **string** | Mã thông báo được sử dụng để truy cập dịch vụ | [tùy chọn] [mặc định là undefined]
**expiresIn** | **number** | Thời gian (giây) tính từ lúc tạo mã thông báo, mà mã thông báo có hiệu lực | [tùy chọn] [mặc định là undefined]
**idToken** | **string** | JWT chứa thông tin xác thực của người dùng, được ký bởi NEMO ID | [tùy chọn] [mặc định là undefined]
**refreshToken** | **string** | Mã thông báo làm mới | [tùy chọn] [mặc định là undefined]
**tokenType** | **string** | Loại token | [tùy chọn] [mặc định là undefined]
**googleTwoFactorAuthentication** | **boolean** | Xác thực g2fa có được bật hay không | [tùy chọn] [mặc định là undefined]
**fundPassword** | **boolean** | Mật khẩu quỹ được bật hay không | [tùy chọn] [mặc định là undefined]
**signature** | **object** | Phản hồi chữ ký từ máy chủ, được sử dụng cho các yêu cầu JSON-RPC | [tùy chọn] [mặc định là undefined]
**nemoAddress** | **string** | Địa chỉ Ethereum của NemoWallet | [tùy chọn] [mặc định là undefined]
**walletAddress** | **Array<string>** | Các địa chỉ Ethereum của các ví MetaMask được liên kết" | [tùy chọn] [mặc định là undefined]

[[Quay lại đầu trang]](#) [[Quay lại danh sách API]](./README.md#tài-liệu-về-api-endpoints) [[Quay lại danh sách Model]](./README.md#tài-liệu-về-models) [[Quay lại README]](./README.md)