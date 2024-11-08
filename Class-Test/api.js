const apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

async function convertCurrency() {
    try {
        const amount = document.getElementById('amount').value;
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const response = await fetch(`${apiUrl}${fromCurrency}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error('Error converting currency:', error);
    }
}