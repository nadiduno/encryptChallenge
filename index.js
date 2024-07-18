function getValueAndEncrypt() {
    var digitizedValue = document.getElementById("textInput").value;
    encrypt(digitizedValue);
    console.log(digitizedValue);
}
  
  function encrypt(digitizedValue) {
    const paragraphElement = document.querySelector('.MensagemEncrypt');
    paragraphElement.textContent = digitizedValue;
  }