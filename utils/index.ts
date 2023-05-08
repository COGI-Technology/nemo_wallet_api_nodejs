import { createHash } from 'crypto'

export const sha256 = (data) => {
    return createHash('sha256').update(data).digest()
}

export const jsonEncode = (obj, escapeForwardSlashes = true) => {
    let ret = JSON.stringify(obj)
    if (escapeForwardSlashes) {
        ret = ret.replace(/\//g, "\\/")
    }
    return ret
}