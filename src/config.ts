import * as crypto from 'crypto'
let customCryptoModule:any;
if (typeof window !== 'undefined' && window.crypto) customCryptoModule=window.crypto
else customCryptoModule=crypto

export default customCryptoModule