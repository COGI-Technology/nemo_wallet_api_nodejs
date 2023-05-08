import { Authentication, NemoApiV2Auth, HttpBasicAuth, HttpBearerAuth, OAuth, ObjectSerializer } from '../models'
import globalAxios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { hostname } from 'os'
import { VALID_STATUS } from '../utils/constants'
import * as util from 'util'

export class ApiClient {
    protected _basePath = ''
    protected _defaultHeaders: any = {}

    protected authentications: { [key: string]: Authentication } = {
        apiv2: new NemoApiV2Auth(),
    }

    constructor(
        basePath?: string,
        userAgent: string = hostname(),
        protected axiosInstance: AxiosInstance = globalAxios,
    ) {
        this._basePath = basePath || this._basePath
        this._defaultHeaders['User-Agent'] = `NemoverseAPI/2.0.0/nodejs/${userAgent}`
    }

    set basePath(basePath: string) {
        this._basePath = basePath
    }

    get basePath() {
        return this._basePath
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders
    }

    get defaultHeaders() {
        return this._defaultHeaders
    }

    public setApiKeyPair(keyId: string, privateKey: string, publicKey: string) {
        const auth = this.authentications['apiv2'] as NemoApiV2Auth
        auth.keyId = keyId
        auth.privateKey = privateKey
        auth.publicKey = publicKey
    }

    public applyToRequest(config: AxiosRequestConfig, authSettings: Array<string>): AxiosRequestConfig {
        for (const auth of authSettings) {
            const authenticator = this.authentications[auth]
            if (authenticator) {
                config = authenticator.applyToRequest(config)
            }
        }
        return config
    }

    public async request<T>(
        config: AxiosRequestConfig,
        responseType: string,
        authSettings: Array<string>,
        validStatus: Array<number> = VALID_STATUS,
    ): Promise<{ response: AxiosResponse; body: T }> {
        return Promise.resolve(config)
            .then((c) => this.applyToRequest(c, authSettings))
            .then((c) => {
                return this.axiosInstance.request(c).then((rsp) => {
                    if (!validStatus.includes(rsp.status)) {
                        throw new Error(`Failed request ${config.url} ${rsp.status} ${util.inspect(rsp.data)}`)
                    }
                    let body = rsp.data
                    const reponseStatus = body['status'] !== undefined ? body['status'] : -1
                    if (reponseStatus < 0 || (!body['params'] && !body['uuid'])) {
                        throw new Error(`Invalid reponse ${util.inspect(body)}`)
                    }
                    body = body['params'] || body['uuid']
                    if (body.error || body.err) {
                        throw new Error(`Invalid reponse ${util.inspect(body)}`)
                    }
                    if (responseType.length > 0) {
                        body = ObjectSerializer.deserialize(body, responseType)
                    }
                    return { response: rsp, body: body }
                })
            })
    }
}
