import * as CryptoJS from "crypto-js";

const encryptionKey = "encryption-key";

export function getEncryption(plainText) {
  return CryptoJS.AES.encrypt(plainText, encryptionKey).toString();
}

export function getDecryption(encText) {
  try {
    return CryptoJS.AES.decrypt(encText, encryptionKey).toString(
      CryptoJS.enc.Utf8
    );
  } catch (error) {
    console.log("Error while decrypting the token");
  }
}
