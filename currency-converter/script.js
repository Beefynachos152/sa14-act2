document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amountInput').value;

    convertCurrency(sourceCurrency, targetCurrency, amount);
});

function convertCurrency(sourceCurrency, targetCurrency, amount) {
    const apiKey = '48101e99a0-495abbfe34-scq3wt';
    const apiUrl = `https://api.fastforex.io/convert?from=${sourceCurrency}&to=${targetCurrency}&amount=${amount}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const convertedAmount = data.result;
            displayResult(convertedAmount);
        })
        .catch(error => {
            console.log('Error fetching exchange rates:', error);
        });
}

function displayResult(convertedAmount) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Converted Amount: ${convertedAmount}`;
}