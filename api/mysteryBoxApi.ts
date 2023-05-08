import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'

export class MysteryBoxApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async mint(
        boxId: string,
        recipient: string,
        metadata: any,
        callback: string,
    ): Promise<{ response: AxiosResponse; body: string }> {
        const localVarPath = this.client.basePath + '/mysterybox/mint'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            recipient: recipient,
            data: metadata,
            callback: callback,
            boxid: boxId,
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

    public async mints(boxes: Array<any>): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/mysterybox/mints'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { boxs: boxes }
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
        return this.client.request<Array<any>>(config, 'Array<any>', authSettings)
    }

    public buildBatchMintData(
        boxIds: Array<string>,
        recipients: Array<string>,
        metadatas: Array<any>,
        callbacks: Array<string>,
    ): any {
        const ret: any[] = []

        for (let index = 0; index < recipients.length; index++) {
            ret.push({
                recipient: recipients[index],
                data: metadatas[index],
                callback: callbacks[index],
                boxid: boxIds[index],
            })
        }

        return ret
    }
}
