const crypto = require('crypto')
const nacl = require('tweetnacl')

const elliptic = require('elliptic')
const ec = new elliptic.ec('secp256k1')

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest()
}

class ECDSA {
    constructor(prv, pub) {
        if (prv !== null) {
            this.keyPair = ec.keyFromPrivate(prv)
            this.prv = Buffer.from(this.keyPair.getPrivate('hex'), 'hex')
            this.pub = Buffer.from(this.keyPair.getPublic('hex'), 'hex')
            return
        }
        if (pub !== null) {
            this.keyPair = new ec.keyFromPublic(pub)
            this.pub = Buffer.from(this.keyPair.getPublic('hex'), 'hex')
            return
        }
        throw new Error('Invalid prv, pub')
    }

    static generate(encoder = 'raw') {
        const keyPair = ec.genKeyPair()
        return [Buffer.from(keyPair.getPrivate('hex'), 'hex'), Buffer.from(keyPair.getPublic('hex'), 'hex')]
    }

    static fromPrivate(key) {
        return new ECDSA(key)
    }

    static fromPublic(key) {
        return new ECDSA(null, key)
    }

    sign(data, encoder = 'raw') {
        const signature = ec.sign(Buffer.from(sha256(data)), this.keyPair, 'hex', { canonical: true })
        return Buffer.from(signature, 'hex')
    }

    verify(data, sig) {
        return ec.verify(Buffer.from(sha256(data)), sig, this.keyPair)
    }
}

class EDDSA {
    constructor(prv, pub) {
        if (prv !== null) {
            this.keyPair = nacl.sign.keyPair.fromSeed(prv)
            this.prv = Buffer.from(keyPair.secretKey.subarray(0, nacl.sign.seedLength))
            this.pub = Buffer.from(keyPair.publicKey)
        } else if (pub !== null) {
            this.pub = pub
        } else {
            throw new Error('Invalid prv, pub')
        }
    }

    static generate(encoder = 'raw') {
        const keys = nacl.sign.keyPair()
        return [Buffer.from(keys.secretKey.subarray(0, nacl.sign.seedLength)), Buffer.from(keys.publicKey)]
    }

    static fromPrivate(key) {
        return new EDDSA(key)
    }

    static fromPublic(key) {
        return new EDDSA(null, key)
    }

    sign(data, encoder = 'raw') {
        const hashedData = sha256(data)
        const signature = nacl.sign.detached(hashedData, this.keyPair.secretKey)
        return Buffer.from(signature)
    }

    verify(data, sig) {
        const hashedData = sha256(data)
        return nacl.sign.detached.verify(hashedData, sig, this.keyPair.publicKey)
    }
}

const dsa = ({ algorithm, action, key, message, signature }) => {
    let cls = EDDSA
    if (algorithm === 'secp256k1') {
        cls = ECDSA
    }
    if (action === 'generate') {
        const [prv, pub] = cls.generate()
        console.log(prv.toString('base64'), pub.toString('base64'))
        return
    }

    if (!key) throw new Error('Key is requested')
    if (!message) throw new Error('Message key is requested')
    key = Buffer.from(key, 'base64')
    message = Buffer.from(message, 'base64')

    if (action === 'sign') {
        const instance = cls.fromPrivate(key)
        console.log(`Signature: ${instance.sign(message).toString('base64')}`)
        return
    }

    if (action === 'verify') {
        signature = Buffer.from(signature, 'base64')
        const instance = cls.fromPublic(key)
        console.log(instance.verify(message, signature))
    }
}

module.exports = {
    dsa,
}
