# nemo-api@1.0.0

TypeScript client NodeJS dành cho nemo-api.

Chào mừng đến với API nemoverse.io

APIv2 cung cấp các hoạt động như mint, charge, award... . Các API nội bộ yêu cầu xác thực.

Môi trường

* Node.js

Phiên bản

* ES2017

## Cài đặt

```shell
npm install nemo-api
```

## Cách dùng

Vui lòng làm theo hướng dẫn [cài đặt](#cài-đặt) và thực thi mã TypeScript sau:

Tạo cặp khóa
```sh
# Sử dụng CLI nemoversdk để tạo ra một cặp khóa. Kết quả trả về lần lượt là một khóa riêng tư và một khóa công khai
npx nemoverse-cli dsa -a generate
# oB13FXaa1BiEiDaUGvuj/blJwj6SRl7JjkE/ApeQf08= auVgK8gSvFOgF5zWmQ5wWhFKImyl5/ka59dcRZtzcDA=
```

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<Một địa chỉ ví>"
api.balance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

## Tài liệu về API Endpoints

Lớp | Phương thức | Yêu cầu HTTP | Mô tả
------------ | ------------- | ------------- | -------------
*HotwalletApi* | [**balance**](./HotwalletApi.md#balance) | **POST** /hotwallet/balance | Thông tin ví nóng tài khoản
*HotwalletApi* | [**charge**](./HotwalletApi.md#charge) | **POST** /hotwallet/charge | Trừ tiền từ số dư trong tài khoản của người dùng
*HotwalletApi* | [**award**](./HotwalletApi.md#award) | **POST** /hotwallet/award | Phát thưởng token cho người dùng
*HotwalletApi* | [**getAllowance**](./HotwalletApi.md#getallowance) | **POST** /hotwallet/get_allowance | Lấy thông tin lượng token của người dùng đã cấp phép cho dịch vụ.
*LandApi* | [**mint**](./LandApi.md#mint) | **POST** /land/mint | Gửi giao dịch để đúc một tài sản phi tập trung (NFT) Land và chuyển nó vào tài khoản, do Minter thực hiện. Nhận UUID của NFT Land nếu thành công
*LandApi* | [**requestMint**](./LandApi.md#requestMint) | **POST** /land/request_mint | Gửi giao dịch để đúc một tài sản phi tập trung (NFT) Land và chuyển nó vào tài khoản, do người dùng thực hiện. Nhận UUID của NFT Land nếu thành công
*LandApi* | [**mints**](./LandApi.md#mints) | **POST** /land/mints | Gửi giao dịch để đúc nhiều NFT Land, do Minter thực hiện
*LandApi* | [**requestMints**](./LandApi.md#requestMints) | **POST** /land/request_mints | Gửi giao dịch để đúc nhiều NFT Land, do người dùng thực hiện
*LandApi* | [**requestCancelbuys**](./LandApi.md#requestCancelbuys) | **POST** /land/request_cancelbuys | Gửi yêu cầu hủy bỏ các giao dịch mua
*MysteryboxApi* | [**mint**](./MysteryboxApi.md#mint) | **POST** /mysterybox/mint | Gửi giao dịch để đúc một tài sản phi tập trung (NFT) BOX và chuyển nó vào tài khoản, do Minter thực hiện. Nhận UUID của NFT nếu thành công
*MysteryboxApi* | [**mints**](./MysteryboxApi.md#mints) | **POST** /mysterybox/mints | Gửi giao dịch để đúc nhiều NFT BOX, do Minter thực hiện
*NemoAccountApi* | [**getLink**](./NemoAccountApi.md#getLink) | **POST** /account/get_link | Lấy danh sách địa chỉ Metamask được liên kết với Ví Nemo
*NemoAccountApi* | [**getNemoWallet**](./NemoAccountApi.md#getNemoWallet) | **POST** /account/get_nemo_wallet | Lấy địa chỉ Ví Nemo được liên kết từ địa chỉ Metamask
*NemoIdApi* | [**login**](./NemoIdApi.md#login) | **POST** /nemoid/login | Đăng nhập và lấy thông tin tài khoản của NemoId
*NemoIdApi* | [**userInfo**](./NemoIdApi.md#userInfo) | **POST** /nemoid/user_info | Lấy thông tin tài khoản của NemoId
*NemoIdApi* | [**relogin**](./NemoIdApi.md#relogin) | **POST** /nemoid/relogin | Đăng nhập lại và lấy thông tin tài khoản của NemoId
*NftApi* | [**mint**](./NftApi.md#mint) | **POST** /nft/mint | Gửi giao dịch để đúc một tài sản phi tập trung (NFT) và chuyển nó vào tài khoản, do Minter thực hiện. Nhận UUID của NFT nếu thành công
*NftApi* | [**requestMint**](./NftApi.md#requestMint) | **POST** /nft/request_mint | Gửi giao dịch để đúc một tài sản phi tập trung (NFT) và chuyển nó vào tài khoản, do người dùng thực hiện. Nhận UUID của NFT nếu thành công
*SubgraphApi* | [**call**](./SubgraphApi.md#call) | **POST** /subgraph/call | Thực hiện truy vấn GraphQL trên subgraph
*SubgraphApi* | [**getTotalVolume**](./SubgraphApi.md#getTotalVolume) | **POST** /subgraph/getTotalVolume | Tính toán tổng khối lượng của thị trường trên subgraph.


## Tài liệu về Models

 - [AccountBalance](./AccountBalance.md)
 - [HotwalletAllowance](./HotwalletAllowance.md)
 - [InternalTransaction](./InternalTransaction.md)
 - [NemoIdAccount](./NemoIdAccount.md)


## Tài liệu về xác thực


## apiv2

Xác thực APIv2 bằng khóa riêng tư và khóa công khai được tạo bởi [libsodium](https://libsodium.gitbook.io) hoặc [libsecp256k1](https://github.com/bitcoin-core/secp256k1)

```bash
ACCESS_ID='/galixcity-testnet/v2/hotwallet/charge'

# UNIX timestamp tính bằng mili giây GMT+0
# Giá trị tỷ lệ thuận với số lượng yêu cầu được thực hiện. Ví dụ: trong các hệ thống tạo nhiều yêu cầu đồng thời, bộ đếm tuần tự phải được sử dụng vì ACCESS_TIME(yêu cầu n+1) > ACCESS_TIME(n yêu cầu).
ACCESS_TIME = $(UNIX timestamp)

# Tham số body trong các yêu cầu POST, PUT và PATCH
# Không có tham số body trong các yêu cầu GET và DELETE
payload = '{"account": "0x19fbA25cf926d8502025f2E765E5bd2E986c8527","amount": "1000000"}'
message_hash = sha256($ACCESS_ID + ":" + $ACCESS_TIME + ":" + $payload)
private_key = <bytes của khóa riêng tư>
# Sử dụng ED25519 để tạo chữ ký
signature = sodium.crypto_sign($message, $private_key)
ACCESS_SIGNATURE = base64.encode($signature)
ACCESS_KEY_ID=<Nhận từ server sau khi cung cấp khóa công khai>

curl -X POST 'https://api.nemoverse.io/galixcity-testnet/v2/hotwallet/charge' \
    -H 'Access-Time: $ACCESS_TIME' \
    -H 'Access-Signature: $ACCESS_SIGNATURE' \
    -H 'Access-Key-Id: $ACCESS_KEY_ID' \
    -H 'Content-Type: application/json' \
    --data-raw $payload
```


## Tác giả

tech@nemoverse.io


