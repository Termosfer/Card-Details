let cardholderinput = document.querySelector(".cardholder");
let cardname = document.querySelector(".name");
let cardnumberinput = document.querySelector(".cardnumber");
let cardnumber = document.querySelector("h1");

// Card Number input alanının keyup event'ini dinleyen fonksiyon
cardnumberinput.addEventListener("input", () => {
  let formatted = "";
  let cardNumberValue = cardnumberinput.value.replace(/\s/g, ""); // Mevcut boşlukları temizle
  for (let i = 0; i < cardNumberValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " ";
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
