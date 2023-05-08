import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'

export class NFTApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async mint(
        recipient: string,
        metadata: any,
        callback: string,
    ): Promise<{ response: AxiosResponse; body: string }> {
        const localVarPath = this.client.basePath + '/nft/mint'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            recipient: recipient,
            data: metadata,
            callback: callback,
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
        return this.client.request<string>(config, 'string', authSettings)
    }

    public async requestMint(
        recipient: string,
        metadata: any,
        callback: string,
    ): Promise<{ response: AxiosResponse; body: string }> {
        const localVarPath = this.client.basePath + '/nft/request_mint'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            recipient: recipient,
            data: metadata,
            callback: callback,
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
        return this.client.request<string>(config, 'string', authSettings)
    }
}
