import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'

export class LandApi {
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
        landId: string,
        level: string,
        landX: string,
        landY: string,
        metadata: any,
        callback: string,
    ): Promise<{ response: AxiosResponse; body: string }> {
        const localVarPath = this.client.basePath + '/land/mint'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            recipient: recipient,
            data: metadata,
            callback: callback,
            landid: landId,
            level: level,
            land_x: landX,
            land_y: landY,
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
        landId: string,
        level: string,
        landX: string,
        landY: string,
        metadata: any,
        callback: string,
    ): Promise<{ response: AxiosResponse; body: string }> {
        const localVarPath = this.client.basePath + '/land/request_mint'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            recipient: recipient,
            data: metadata,
            callback: callback,
            landid: landId,
            level: level,
            land_x: landX,
            land_y: landY,
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

    public async mints(lands: Array<any>): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/land/mints'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { lands: lands }
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

    public async requestMints(lands: Array<any>): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/land/request_mints'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { lands: lands }
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

    public async requestCancelBuys(lands: Array<any>): Promise<{ response: AxiosResponse; body: Array<any> }> {
        const localVarPath = this.client.basePath + '/land/request_cancelbuys'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { lands: lands }
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
        recipients: Array<string>,
        landIds: Array<string>,
        levels: Array<string>,
        landXs: Array<string>,
        landYs: Array<string>,
        metadatas: Array<any>,
        callbacks: Array<string>,
    ): any {
        const ret: any[] = []

        for (let index = 0; index < recipients.length; index++) {
            ret.push({
                recipient: recipients[index],
                data: metadatas[index],
                callback: callbacks[index],
                landid: landIds[index],
                level: levels[index],
                land_x: landXs[index],
                land_y: landYs[index],
            })
        }

        return ret
    }
}
