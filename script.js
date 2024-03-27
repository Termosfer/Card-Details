let cardholderinput = document.querySelector(".cardholder");
let cardname = document.querySelector(".name");
let cardnumberinput = document.querySelector(".cardnumber");
let cardnumber = document.querySelector("h1");
let cardmonthInput = document.querySelector(".input1");
let cardmonth = document.querySelector("#a");
let cardYearInput = document.querySelector(".input2");
let cardYear = document.querySelector("#b");
let cvc = document.querySelector(".cvc");
let span2 = document.querySelector(".span2")
// Card Number input alanının keyup event'ini dinleyen fonksiyon
cardnumberinput.addEventListener("input", () => {
  let formatted = "";
  let cardNumberValue = cardnumberinput.value.replace(/\s/g, ""); // Mevcut boşlukları temizle
  for (let i = 0; i < cardNumberValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " ";
      cardNumberValue.value = "*"
    }
    formatted += cardNumberValue.charAt(i);
  }
    cardnumberinput.value = formatted;
  
  // Card Number'ın innerText'ini değiştir
});

// Card Holder input alanının her tuşa basıldığında içeriğini değiştiren fonksiyon
cardnumberinput.addEventListener("input", () => {
  if (cardnumberinput.value.length == 0) {
    cardnumber.innerText = "0000 0000 0000 0000";
  } else {
    cardnumber.innerText = cardnumberinput.value;
  }
});

cardholderinput.addEventListener("keyup", () => {
  cardname.innerHTML = cardholderinput.value;
});

cardmonthInput.addEventListener("input", () => {
  cardmonth.innerText = cardmonthInput.value;
});
cardYearInput.addEventListener("input", () => {
  cardYear.innerText = cardYearInput.value;
});

span2.addEventListener("input", ()=>{
cvc.innerText = span2.value;
})