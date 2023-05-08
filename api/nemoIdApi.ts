import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ApiClient } from './apiClient'
import { NemoIdAccount } from '../models'

export class NemoIdApi {
    protected client: ApiClient

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client
        } else {
            this.client = new ApiClient()
        }
    }

    public async login(
        code: string,
        codeVerifier: string,
        redirectURI: string,
    ): Promise<{ response: AxiosResponse; body: NemoIdAccount }> {
        const localVarPath = this.client.basePath + '/nemoid/login'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            code: code,
            code_verifier: codeVerifier,
            redirect_uri: redirectURI,
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
        return this.client.request<NemoIdAccount>(config, 'NemoIdAccount', authSettings)
    }

    public async userInfo(accessToken: string): Promise<{ response: AxiosResponse; body: NemoIdAccount }> {
        const localVarPath = this.client.basePath + '/nemoid/user_info'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = { access_token: accessToken }
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
        return this.client.request<NemoIdAccount>(config, 'NemoIdAccount', authSettings)
    }

    public async relogin(
        refreshToken: string,
        codeVerifier: string,
    ): Promise<{ response: AxiosResponse; body: NemoIdAccount }> {
        const localVarPath = this.client.basePath + '/nemoid/relogin'
        const localVarQueryParameters: any = {}
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders)
        const localVarBodyParams: any = {
            refresh_token: refreshToken,
            code_verifier: codeVerifier,
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
        return this.client.request<NemoIdAccount>(config, 'NemoIdAccount', authSettings)
    }
}
