# nemo-api@1.0.0

TypeScript NodeJS client for nemo-api.

Welcome to nemoverse.io API

APIv2 provides mint, charge, award... operations. There are private APIs which needs authentication.

Environment

* Node.js

Language level

* ES2017

## Installation

```shell
npm install nemo-api
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following TypeScript code:

Create a key pair
```sh
# Use the nemoversdk CLI to generate a key pair. The response will be a private key and a public key
nemoverse-cli dsa -a generate
# oB13FXaa1BiEiDaUGvuj/blJwj6SRl7JjkE/ApeQf08= auVgK8gSvFOgF5zWmQ5wWhFKImyl5/ka59dcRZtzcDA=
```

```typescript
const NEMOApi = require('nemo-api');
const client = new NEMOApi.ApiClient();
// uncomment the next line to change base path
// client.basePath = "https://some-other-host"

const api = new NEMOApi.HotwalletApi(client);
const user = "<A  Ethereum address>"
api.balance(user)
   .then(value => console.log('API called successfully. Returned data: ', value.body),
         error => console.error(error));
```

## Documentation for API Endpoints

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HotwalletApi* | [**balance**](./HotwalletApi.md#balance) | **POST** /hotwallet/balance | Account's hotwallet information
*HotwalletApi* | [**charge**](./HotwalletApi.md#charge) | **POST** /hotwallet/charge | Deduct balance from the user's account
*HotwalletApi* | [**award**](./HotwalletApi.md#award) | **POST** /hotwallet/award | Award token to user
*HotwalletApi* | [**getAllowance**](./HotwalletApi.md#getAllowance) | **POST** /hotwallet/get_allowance | Get user's approval for the service
*LandApi* | [**mint**](./LandApi.md#mint) | **POST** /land/mint | Send a transaction to mint an NFT Land and transfer it to an account, executed by the minter. Get UUID of NFT Land if successful
*LandApi* | [**requestMint**](./LandApi.md#requestMint) | **POST** /land/request_mint | Send a transaction to mint an NFT Land and transfer it to an account, executed by the user. Get UUID of NFT Land if successful
*LandApi* | [**mints**](./LandApi.md#mints) | **POST** /land/mints | Send batch transaction to mint multiple NFT Land, executed by the minter
*LandApi* | [**requestMints**](./LandApi.md#requestMints) | **POST** /land/request_mints | Send batch transaction to mint multiple NFT Land, executed by the user
*LandApi* | [**requestCancelbuys**](./LandApi.md#requestCancelbuys) | **POST** /land/request_cancelbuys | Send batch request cancel buy
*MysteryboxApi* | [**mint**](./MysteryboxApi.md#mint) | **POST** /mysterybox/mint | Send a transaction to mint an NFT BOX and transfer it to an account, executed by the minter. Get UUID of NFT if successful
*MysteryboxApi* | [**mints**](./MysteryboxApi.md#mints) | **POST** /mysterybox/mints | Send batch transaction to mint multiple NFT BOX, executed by the minter
*NemoAccountApi* | [**getLink**](./NemoAccountApi.md#getLink) | **POST** /account/get_link | Get a list of Metamask addresses linked to Nemo Wallet
*NemoAccountApi* | [**getNemoWallet**](./NemoAccountApi.md#getNemoWallet) | **POST** /account/get_nemo_wallet | Get the Nemo Wallet address that is linked from the Metamask address
*NemoIdApi* | [**login**](./NemoIdApi.md#login) | **POST** /nemoid/login | Login and get NemoIdAccount's information
*NemoIdApi* | [**userInfo**](./NemoIdApi.md#userInfo) | **POST** /nemoid/user_info | Get NemoIdAccount's information
*NemoIdApi* | [**relogin**](./NemoIdApi.md#relogin) | **POST** /nemoid/relogin | Relogin and get NemoIdAccount's information
*NftApi* | [**mint**](./NftApi.md#mint) | **POST** /nft/mint | Send a transaction to mint an NFT and transfer it to an account, executed by the minter. Get UUID of NFT if successful
*NftApi* | [**requestMint**](./NftApi.md#requestMint) | **POST** /nft/request_mint | Send a transaction to mint an NFT and transfer it to an account, executed by the user. Get UUID of NFT if successful
*SubgraphApi* | [**call**](./SubgraphApi.md#call) | **POST** /subgraph/call | Execute a GraphQL query on subgraph
*SubgraphApi* | [**getTotalVolume**](./SubgraphApi.md#getTotalVolume) | **POST** /subgraph/getTotalVolume | Calculate the total volume of the marketplace on the subgraph


## Documentation For Models

 - [AccountBalance](./AccountBalance.md)
 - [HotwalletAllowance](./HotwalletAllowance.md)
 - [InternalTransaction](./InternalTransaction.md)
 - [NemoIdAccount](./NemoIdAccount.md)


## Documentation For Authorization


## apiv2

Authentication with APIv2 private key and public key is created by [libsodium](https://libsodium.gitbook.io) or [libsecp256k1](https://github.com/bitcoin-core/secp256k1)

```bash
ACCESS_ID='/galixcity-testnet/v2/hotwallet/charge'

# UNIX timestamp in milliseconds, GMT+0
# The value is directly proportional to the number of requests made. For example, in systems that generate multiple requests simultaneously, a sequential counter must be used because ACCESS_TIME(request n+1) > ACCESS_TIME(request n).
ACCESS_TIME = $(UNIX timestamp in milliseconds)

# Body parameters in POST, PUT, and PATCH requests
# There are no body parameters in GET or DELETE requests
payload = '{"account": "0x19fbA25cf926d8502025f2E765E5bd2E986c8527","amount": "1000000"}'
message_hash = sha256($ACCESS_ID + ":" + $ACCESS_TIME + ":" + $payload)
private_key = <Private key encode bytes>
# Using ED25519 to create a signature
signature = sodium.crypto_sign($message, $private_key)
ACCESS_SIGNATURE = base64.encode($signature)
ACCESS_KEY_ID=<Receive from server after adding public key>

curl -X POST 'https://api.nemoverse.io/galixcity-testnet/v2/hotwallet/charge' \
    -H 'Access-Time: $ACCESS_TIME' \
    -H 'Access-Signature: $ACCESS_SIGNATURE' \
    -H 'Access-Key-Id: $ACCESS_KEY_ID' \
    -H 'Content-Type: application/json' \
    --data-raw $payload
```


## Author

tech@nemoverse.io


