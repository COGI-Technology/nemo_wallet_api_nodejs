import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'

export class OnchainApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async scanTX(chainId: number, hashes: Array<string>): Promise<{ response: AxiosResponse; body: any }> {
        const localVarPath = this.client.basePath + '/onchain/scan_tx'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            chain_id: chainId,
            hashes: hashes,
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
        return this.client.request<any>(config, '', authSettings)
    }
}
