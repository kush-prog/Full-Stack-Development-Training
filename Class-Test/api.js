const apiKey = 'ExchangeRate-API key'; // Replace with your ExchangeRate-API key
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    async function fetchCurrencies() {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');

        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });
    }

    async function convertCurrency() {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`);
        const data = await response.json();
        const rate = data.conversion_rate;
        const result = amount * rate;
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    }

fetchCurrencies();