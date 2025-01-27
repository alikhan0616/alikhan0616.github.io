const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const msg = document.querySelector(".msg-rate");


for ( let select of dropDown){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "GBP") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change" , (evt) => {
        upDateFlag(evt.target);
    });
}   

const upDateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;   
}

const upDateExchangeRate = async () => {
    let amount = document.querySelector(".amount input")
    let amntValue = amount.value;
    if(amntValue === "" || amntValue < 0) {
        amntValue = 1;
        amount.value = "1";
    }
    console.log(fromCurr.value , toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    
    let finalAmount = amntValue * rate;
    msg.innerText = `${amntValue} ${fromCurr.value} = ${Math.round(finalAmount * 100)/ 100} ${toCurr.value}`;
    console.log(finalAmount);
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    upDateExchangeRate();
});

window.addEventListener("load", () => {
    upDateExchangeRate();
})
