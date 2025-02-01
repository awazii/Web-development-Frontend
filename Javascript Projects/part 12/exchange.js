const Currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "INR", name: "Indian Rupee" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "CAD", name: "Canadian Dollar" },
];
let base = document.getElementById("base-currency")
let target = document.getElementById("target-currency")
let amount = document.getElementById("Amount")
amount.value = 1
function options(select) {
    Currencies.forEach((currency) => {
        let option = document.createElement("option")
        option.value = `${currency.code}`
        option.textContent = `${currency.name}-${currency.code}`;
        select.appendChild(option)
    })
}
options(base)
options(target)
amount.addEventListener('keydown', (e) => {
    if (e.key === '-') {
        e.preventDefault();// to prevent user to enter -
    }
});
amount.addEventListener('paste', function (event) {
    const paste = (event.clipboardData || window.clipboardData).getData('text');
    if (paste.includes('-')) {
        event.preventDefault();
    }
});
document.getElementById("exchange").addEventListener("click", async () => {
    try {
        let exchange= await fetch(`https://v6.exchangerate-api.com/v6/41c0c30f47f86ccf8ae5b1a3/pair/${base.value}/${target.value}`)
        let response = await exchange.json()
        document.querySelector(".result").innerHTML=`${amount.value} ${base.value} = ${(response.conversion_rate * amount.value).toFixed(2)} ${target.value}`
    } catch (error) {
        console.log(error)
    }
          
})
