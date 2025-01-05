import CryptoJS from "crypto-js";

export class EncryptionService {
  private static encryptionKey: string =
    process.env.NEXT_PUBLIC_SECRET_ENC_KEY || "";

  public static encrypt(data: string): string {
    const key = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    const iv = CryptoJS.enc.Utf8.parse(this.encryptionKey);
    const encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  }

  public static decrypt(data: string): string {
    try {
      const key = CryptoJS.enc.Utf8.parse(this.encryptionKey);
      const iv = CryptoJS.enc.Utf8.parse(this.encryptionKey);
      const decrypted = CryptoJS.AES.decrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      console.log(e, "error here");
      return "";
    }
  }
}
