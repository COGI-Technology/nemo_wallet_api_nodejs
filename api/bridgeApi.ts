import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'

export class BridgeApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async pause(
        networks?: Array<string>,
        chainIds?: Array<number>,
    ): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/bridge/pause'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {}
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        if (networks) localVarBodyParams.networks = networks
        if (chainIds) localVarBodyParams.chainIds = chainIds

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<Array<any>>(config, 'Array<any>', authSettings)
    }

    public async unpause(
        networks?: Array<string>,
        chainIds?: Array<number>,
    ): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/bridge/unpause'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {}
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        if (networks) localVarBodyParams.networks = networks
        if (chainIds) localVarBodyParams.chainIds = chainIds

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<Array<any>>(config, 'Array<any>', authSettings)
    }

    public async blockToken(
        token: string,
        network?: string,
        chainId?: number,
    ): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/bridge/block_token'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { token: token }
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        if (network) localVarBodyParams.network = network
        else if (chainId) localVarBodyParams.chainId = chainId
        else throw new Error('Network or Chain ID is requested')

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<Array<any>>(config, 'Array<any>', authSettings)
    }

    public async unblockToken(
        token: string,
        network?: string,
        chainId?: number,
    ): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/bridge/unblock_token'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { token: token }
        const produces = ['application/json']
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json'
        } else {
            localVarHeaderParams.Accept = produces.join(',')
        }

        if (network) localVarBodyParams.network = network
        else if (chainId) localVarBodyParams.chainId = chainId
        else throw new Error('Network or Chain ID is requested')

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: localVarBodyParams,
        }

        const authSettings = ['apiv2']
        return this.client.request<Array<any>>(config, 'Array<any>', authSettings)
    }
}
