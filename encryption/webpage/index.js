

function encrypt(plainText, key) {
    let encryptedText = [];
    let keyLength = key.length;
  
  
  
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        
      let shift = parseInt(key[i % keyLength]);
        let encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
        encryptedText.push(encryptedChar);
    }
  
    
    return encryptedText.join('');
  }
  
  function decrypt(cipherText, key) {
    let decryptedText = [];
    let keyLength = key.length;
  
    
    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i];
        let shift = parseInt(key[i % keyLength]);
        let decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) - shift) % 26) + 'a'.charCodeAt(0));
        decryptedText.push(decryptedChar);
    }
  
    
    return decryptedText.join('');
  }
  
  function encryptMessage() {
    let message = document.getElementById('message').value.toLowerCase();
    let key = document.getElementById('key').value;
    let cipherText = encrypt(message, key);
    document.getElementById('result').value = cipherText;
  
  }
  
  function decryptMessage() {
    
    let cipherText = document.getElementById('message').value.toLowerCase();
    
    let key = document.getElementById('key').value;
    
    let decryptedText = decrypt(cipherText, key);
    document.getElementById('result').value = decryptedText;
  }
  