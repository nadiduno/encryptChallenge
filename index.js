var characterList = [];
var encryptText;

window.onload = function() {
  document.getElementById("textInput").focus();
};

function resetObjet(){
  alert('Digite seu texto. Apenas letras minúsculas e sem acento')
  colunn3.style.display = 'block';
  colunn4.style.display = 'none';
  document.getElementById("textInput").focus();
}

function getValueAndEncrypt() {
  var digitizedValue = undefined  
  digitizedValue = document.getElementById("textInput").value;
  if (digitizedValue.trim() === ""){
    resetObjet()
    return;
  }
  encrypt(digitizedValue);
  textInput.value = "";
  colunn3.style.display = 'none';
  colunn4.style.display = 'block';
  console.log(digitizedValue);
}
  
function encrypt(digitizedValue) {
    const paragraphElement = document.querySelector('.MensagemEncrypt');
    var characterList = [];

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
    encryptText = characterList.join("");
    paragraphElement.innerHTML = '';
    paragraphElement.textContent = encryptText;
    console.log(characterList); 
  }

  function clipBoard(){
    //Verficando se Clipboard é suportado pelo navegador
    if (!navigator.clipboard) {
      alert("Seu navegador não suporta a API Clipboard. Utilize um navegador mais recente.");
      return;
    }
    //Usando a API Clipboard
    navigator.clipboard.writeText(encryptText)
    .then(() => {
      colunn3.style.display = 'block';
      colunn4.style.display = 'none';    
      console.log("Texto copiado para a área de transferência!");
    })
    .catch(error => {
        console.error("Erro ao copiar texto:", error);
    });
  }

function getValueAndDecrypt() {
    var digitizedValue = undefined 
    digitizedValue = document.getElementById("textInput").value;
    if (digitizedValue.trim() === ""){
      resetObjet()
      return;
    }  
    decrypt(digitizedValue);
    textInput.value = "";
    colunn3.style.display = 'none';
    colunn4.style.display = 'block';
    console.log(digitizedValue);
}
 
  function decrypt(digitizedValue){
    const paragraphElement = document.querySelector('.MensagemEncrypt');
    var characterList = [];
    for (let i = 0; i < digitizedValue.length; i++) 
      characterList.push(digitizedValue[i].toLowerCase());
    let i =0;
    console.log(characterList) 
    while(i < characterList.length){
      //Descriptografiando
      switch (characterList[i]) {
        case "a":
          if(characterList[i]+characterList[i+1]=="ai")
            characterList.splice(i+1,1);
          break;
        case "e":
          if(characterList[i]+characterList[i+1]+characterList[i+2]+characterList[i+3]+characterList[i+4]=="enter")
            characterList.splice(i+1,4);  
          break;
        case "i":
          if(characterList[i]+characterList[i+1]+characterList[i+2]+characterList[i+3]=="imes")
            characterList.splice(i+1,3);
          break;
        case "o":
          if(characterList[i]+characterList[i+1]+characterList[i+2]+characterList[i+3]=="ober")
            characterList.splice(i+1,3);
          break;
        case "u":
          if(characterList[i]+characterList[i+1]+characterList[i+2]+characterList[i+3]=="ufat")
            characterList.splice(i+1,3);
          break;
        default:
          characterList[i] = characterList[i];
      }
      i++;
    }
    //Unindo o array em uma cadeia de carateres novamnete
    const encryptText = characterList.join("");
    paragraphElement.innerHTML = '';
    paragraphElement.textContent = encryptText;
    console.log(characterList); 
  }