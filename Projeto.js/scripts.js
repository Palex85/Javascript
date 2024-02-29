const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
  const dollarToday = 5.2
  const euroToday = 6.2

  if (currencySelect.value == "dollar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency", currency: "BLR"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
      .format(inputCurrencyValue / dollarToday)
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

}

function changeCurrency(){
 const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")
 if (currencySelect.value == "dollar"){
  currencyName.innerHTML = "Dollar americano"
  currencyImage.src = "./assets/Dollar.png"
 }
 if (currencySelect.value == "euro"){
  currencyName.innerHTML = "Euro"
  currencyImage.src ="./assets/Euro.png"
}
convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)
