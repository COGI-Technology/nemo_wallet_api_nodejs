import { AxiosRequestConfig } from 'axios'
import { URL } from 'url'
import * as nacl from 'tweetnacl'
import { jsonEncode, sha256 } from '../utils'

export interface Authentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig
}

export class HttpBasicAuth implements Authentication {
    public username = ''
    public password = ''

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        config.auth = {
            username: this.username,
            password: this.password,
        }
        return config
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = ''

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (config && config.headers) {
            const accessToken = typeof this.accessToken === 'function' ? this.accessToken() : this.accessToken
            config.headers['Authorization'] = 'Bearer ' + accessToken
        }
        return config
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey = ''

    constructor(private location: string, private paramName: string) {}

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (this.location == 'query') {
            config.params[this.paramName] = this.apiKey
        } else if (this.location == 'header' && config && config.headers) {
            config.headers[this.paramName] = this.apiKey
        } else if (this.location == 'cookie' && config && config.headers) {
            if (config.headers['Cookie']) {
                config.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey)
            } else {
                config.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey)
            }
        }
        return config
    }
}

export class OAuth implements Authentication {
    public accessToken = ''

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        if (config && config.headers) {
            config.headers['Authorization'] = 'Bearer ' + this.accessToken
        }
        return config
    }
}

export class NemoApiV2Auth implements Authentication {
    public keyId = ''
    public publicKey = ''
    public privateKey = ''

    applyToRequest(config: AxiosRequestConfig): AxiosRequestConfig {
        const accessTime: string = new Date().getTime().toString()
        const accessId: string = new URL(config.url as string).pathname
        const data = config.data || {}
        const privateKeyDecoded = Buffer.from(this.privateKey, 'base64')
        const messageHash = sha256(`${accessId}:${accessTime}:${jsonEncode(data)}`)

        const { secretKey } = nacl.sign.keyPair.fromSeed(privateKeyDecoded)
        const signature = Buffer.from(nacl.sign(messageHash, secretKey)).slice(0, 64).toString('base64')

        config.headers['Access-Time'] = accessTime
        config.headers['Access-Signature'] = signature
        config.headers['Access-Key-Id'] = this.keyId

        return config
    }
}
