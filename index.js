function getValueAndEncrypt() {
    var digitizedValue = document.getElementById("textInput").value;
    encrypt(digitizedValue);
    console.log(digitizedValue);
}
  
function encrypt(digitizedValue) {
    const paragraphElement = document.querySelector('.MensagemEncrypt');
    const characterList = [];
    for (let i = 0; i < digitizedValue.length; i++) {
      
      //Guardando os caracteres em minusculos em uma lista 
      characterList.push(digitizedValue[i].toLowerCase()); 
      
      //Chaves da criptografia
      switch (characterList[i]) {
        case "a":
          characterList[i] = "ai";
          break;
        case "e":
          characterList[i] = "enter";
          break;
        case "i":
          characterList[i] = "imes";
          break;
        case "o":
          characterList[i] = "ober";
          break;
        case "u":
          characterList[i] = "ufat";
          break;
        default:
          characterList[i] = characterList[i];
      }
    }
    //Unindo o array em uma cadeia de carateres novamnete
    const encryptText = characterList.join("");
    paragraphElement.textContent = encryptText;
    clipBoard(encryptText);
  }

  function clipBoard(encryptText){
    //Verficando se Clipboard é suportado pelo navegador
    if (!navigator.clipboard) {
      alert("Seu navegador não suporta a API Clipboard. Utilize um navegador mais recente.");
      return;
    }
    //Usando a API Clipboard
    navigator.clipboard.writeText(encryptText)
    .then(() => {
        console.log("Texto copiado para a área de transferência!");
    })
    .catch(error => {
        console.error("Erro ao copiar texto:", error);
    });
  }