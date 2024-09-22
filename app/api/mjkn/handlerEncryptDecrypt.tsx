import * as crypto from 'crypto';
import * as base64 from 'base-64';
import * as lz from 'lz-string';


export function prepareHeader(): any {
  const userKeyx: string = "96b7eaaca9f290e22a3ebee904f8dc17";
  const data: string = "2607";
  const secKey: string = "0mJ2A251A9";
  const ts: number = Math.floor(Date.now() / 1000);
  const tStampx: string = ts.toString();
  const message: string = data + "&" + tStampx;
  const messagex: Buffer = Buffer.from(message, "utf-8");
  const secretx: Buffer = Buffer.from(secKey, "utf-8");

  const signature: Buffer = crypto.createHmac('sha256', secretx)
    .update(messagex)
    .digest();

  const signaturex: string = signature.toString('base64');

  const context: any = {
    data1: data,
    data2: tStampx,
    data3: signaturex,
    data4: userKeyx,
    data5: secretx.toString('utf-8'),
  };
  return context;
}

// Usage:
// const headerContext = prepareHeader();
// console.log(headerContext);


export function decryptAndDecompress(txtEnc: string, key: string): string {

  if (txtEnc) {
    // key='26070mJ2A251A91714829316'
    const keyHash = crypto.createHash('sha256').update(key, 'utf8').digest();
    // console.log(key);
    // console.log(txtEnc);
    // console.log(keyHash);

    const decipher = crypto.createDecipheriv('aes-256-cbc', keyHash.slice(0, 32), keyHash.slice(0, 16));

    let decrypted = decipher.update(Buffer.from(txtEnc, 'base64'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    const decompressed = lz.decompressFromEncodedURIComponent(decrypted.toString('utf8'));
    return decompressed
  }
  return ''; // Return decompressed string or empty string if decompression fails
}

// Example usage
// const encryptedText = '...'; // Base64-encoded encrypted text
// const secretKey = 'mySecretKey';

// const decryptedAndDecompressed = decryptAndDecompress(encryptedText, secretKey);
// console.log(decryptedAndDecompressed);



