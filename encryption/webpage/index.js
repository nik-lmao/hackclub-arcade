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




function generateRandomText(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

function createBackgroundText() {
  const backgroundTextElement = document.getElementById('background-text');
  let text = '';
  while (text.length < 200000) {
    text += generateRandomText(1000) + '\n';
  }

  backgroundTextElement.textContent = text;
}

window.onload = function(){
  createBackgroundText();
}
