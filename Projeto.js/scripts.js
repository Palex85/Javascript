function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencySelect = document.querySelector(".currency-select")
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //outras moedas
  const dollarToday = 5.2
  const euroToday = 6.2
  const libraToday = 7.3
  const bitcoinToday = 307.076

  if (currencySelect.value == "dollar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dollarToday)
  }

  if (currencySelect.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
  const currencySelect = document.querySelector(".currency-select")
  if (currencySelect.value == "dollar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/Dollar.png"
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/Euro.png"
  }
  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./assets/libra 1.png"
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin 1.png"
  }
 
  convertValues()
}

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
