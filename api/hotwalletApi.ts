import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'
import { AccountBalance, HotwalletAllowance, InternalTransaction, ObjectSerializer } from '../models'

export class HotwalletApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async balance(account: string): Promise<{ response: AxiosResponse; body: AccountBalance }> {
        const localVarPath = this.client.basePath + '/hotwallet/balance'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: { account: account },
        }

        const authSettings = ['apiv2']
        return this.client.request<AccountBalance>(config, 'AccountBalance', authSettings).then((res) => {
            res.body.account = account
            return res
        })
    }

    public async getAllowance(account: string): Promise<{ response: AxiosResponse; body: HotwalletAllowance }> {
        const localVarPath = this.client.basePath + '/hotwallet/get_allowance'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: { account: account },
        }

        const authSettings = ['apiv2']
        return this.client.request<HotwalletAllowance>(config, 'HotwalletAllowance', authSettings).then((res) => {
            res.body.account = account
            return res
        })
    }

    public async charge(
        account: string,
        amount: number,
    ): Promise<{
        response: AxiosResponse
        body: { transaction: InternalTransaction; accountBalance: AccountBalance }
    }> {
        const localVarPath = this.client.basePath + '/hotwallet/charge'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            account: account,
            amount: amount.toString(),
        }
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<any>(config, '', authSettings).then((res) => {
            const data = res.body
            data['account'] = account
            const transaction: InternalTransaction = ObjectSerializer.deserialize(data, 'InternalTransaction')
            transaction.kind = InternalTransaction.Kind.WITHDRAW
            const wallet: AccountBalance = ObjectSerializer.deserialize(data, 'AccountBalance')
            res.body = {
                transaction: transaction,
                accountBalance: wallet,
            }
            return res
        })
    }

    public async award(
        account: string,
        amount: number,
    ): Promise<{
        response: AxiosResponse
        body: { transaction: InternalTransaction; accountBalance: AccountBalance }
    }> {
        const localVarPath = this.client.basePath + '/hotwallet/award'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            account: account,
            amount: amount.toString(),
        }
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<any>(config, '', authSettings).then((res) => {
            const data = res.body
            data['account'] = account
            const transaction: InternalTransaction = ObjectSerializer.deserialize(data, 'InternalTransaction')
            transaction.kind = InternalTransaction.Kind.DEPOSIT
            const wallet: AccountBalance = ObjectSerializer.deserialize(data, 'AccountBalance')
            res.body = {
                transaction: transaction,
                accountBalance: wallet,
            }
            return res
        })
    }
}
