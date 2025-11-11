
let cardForm = document.querySelector("#cardForm");
let cardName = document.querySelector("#cardName");
let cardNumber = document.querySelector("#cardNumber");
let expiryDate = document.querySelector("#expiryDate");
let cvv = document.querySelector("#cvv");
let button = document.querySelector("button");
let nameError = document.querySelector("#nameError");
let numberError = document.querySelector("#numberError");
let expiryError = document.querySelector("#expiryError");
let cvvError = document.querySelector("#cvvError");
successMsg=  document.querySelector("#successMsg")

cardForm.addEventListener("submit", function (dets) {
    dets.preventDefault();

    
    nameError.textContent = "";
    numberError.textContent = "";
    expiryError.textContent = "";
    cvvError.textContent = "";
   
    const namePattern = /^[A-Za-z\s]{2,}$/;
    const cardNumberPattern = /^\d{16}$/;
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;

    //Check for Card-Name
    let cardNameResult = namePattern.test(cardName.value)
    if (!cardNameResult) {
        nameError.textContent = "❌ Please enter a valid name (letters and spaces only)."
        cardName.style.borderColor = "red";
    }
    else {
        cardName.style.borderColor = "green";
    }
    // check for card-number
    console.log(cardNumber.value);
    let cardNumberResult = cardNumberPattern.test(cardNumber.value);
    if (!cardNumberResult) {
        numberError.textContent = "❌ Card number must be exactly 16 digits!";
        cardNumber.style.borderColor = "red";
    }
    else {
        cardNumber.style.borderColor = "green";
    }

    //check for expiryDate

    console.log(expiryDate.value);
    let expiryDateResult = expiryPattern.test(expiryDate.value)
    if (!expiryDateResult) {

        expiryError.textContent = "❌ Invalid expiry format! Use MM/YY (e.g. 03/27)."
        expiryDate.style.borderColor = "red";
    } else {
        expiryDate.style.borderColor = "green";
    }

    // check for cvvPattern 

    let cvvResult = cvvPattern.test(cvv.value);
    if (!cvvResult) {
        cvvError.textContent = "❌ CVV must be exactly 3 digits only."
        cvv.style.borderColor = "red";
    } else {
        cvv.style.borderColor = "green";
    }

    if (cardNameResult && cardNumberResult && expiryDateResult && cvvResult) {
      successMsg.textContent = "✅ Payment Successful! Thank you for your purchase.";
       cardForm.reset();
       cardName.style.borderColor = "";
    cardNumber.style.borderColor = "";
    expiryDate.style.borderColor = "";
    cvv.style.borderColor = "";
   
    }

})