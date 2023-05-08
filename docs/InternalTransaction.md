# InternalTransaction

Transaction information is provided when requesting a charge or an award.
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **string** | The Ethereum address of the user | [optional] [default to undefined]
**txHash** | **string** | A unique identifier that is used to track and verify transactions | [optional] [default to undefined]
**amount** | **string** | The number of tokens used in the transaction | [optional] [default to undefined]
**kind** | **number** | The types of transaction may include withdrawals, deposits, and more. | [optional] [default to undefined]

## Enum: InternalTransaction.Kind

* `INTERNAL` (value: `'207'`)

* `ONCHAIN` (value: `'203'`)

* `OFFCHAIN` (value: `'202'`)

* `WITHDRAW` (value: `'201'`)

* `DEPOSIT` (value: `'200'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


