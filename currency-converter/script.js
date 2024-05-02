const apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

document.getElementById('converter-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const amountInput = document.getElementById('amount');
    const sourceCurrencySelect = document.getElementById('source-currency');
    const targetCurrencySelect = document.getElementById('target-currency');
    const convertedAmountSpan = document.getElementById('converted-amount');
    const exchangeRateSpan = document.getElementById('exchange-rate');

    const amount = parseFloat(amountInput.value);
    const sourceCurrency = sourceCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;

    if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    try {
        const response = await fetch(`${apiUrl}${sourceCurrency}`);
        const data = await response.json();

        if (!data.rates || !data.rates[targetCurrency]) {
            alert('Failed to retrieve valid exchange rates.');
            return;
        }

        const exchangeRate = data.rates[targetCurrency];
        const convertedAmount = amount * exchangeRate;

        convertedAmountSpan.textContent = `${convertedAmount.toFixed(2)} ${targetCurrency}`;
        exchangeRateSpan.textContent = `1 ${sourceCurrency} = ${exchangeRate.toFixed(2)} ${targetCurrency}`;

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred. Please try again later.');
    }
});
