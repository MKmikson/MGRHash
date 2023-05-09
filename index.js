const { randomInt } = require('crypto');

function keyGenerator(view_text) {
  const bits = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let key = "";
  
  for (let i = 0; i < view_text.length; i++) { 
    const bit_number = randomInt(0, bits.length - 1);
    // console.log(bit_number, " -- bit_number");
    key += String.fromCharCode(view_text[i].charCodeAt() * bit_number);
    // console.log(String.fromCharCode(view_text[i].charCodeAt() * bit_number), " -- bit");
  }
  // console.log(key, " -- key");

  return key;
}

function hash(view_text, key) {
  let encrypted ="";
  for (let i = 0; i < view_text.length; i++){
    encrypted += String.fromCharCode(view_text[i].charCodeAt() + key[i].charCodeAt());
    // console.log(view_text[i].charCodeAt() + key[i].charCodeAt(), " -- encrypted");
  }

  return encrypted;
}

function decrypt(hashed_text, key) { 
  let decrypted ="";
  for (let i = 0; i < hashed_text.length; i++){
    decrypted += String.fromCharCode(hashed_text[i].charCodeAt() - key[i].charCodeAt());
    // console.log(String.fromCharCode(hashed_text[i].charCodeAt() - key[i].charCodeAt()), " -- decrypted");
  }

  return decrypted;
}


module.exports = { hash, decrypt, keyGenerator };


