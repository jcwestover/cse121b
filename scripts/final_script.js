document.addEventListener('DOMContentLoaded', getCryptoData);

async function getCryptoData() {
    const API_KEY = 'CG-RNorTVuz4ZWuKiw2SRDa5aPJ';
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Error fetching cryptocurrency data', error);
    }
}

function displayCryptoData(data) {
    const cryptoList = document.getElementById('cryptoList');
    let html = '';

    data.forEach(crypto => {
        html += `
            <li class="crypto-item">
                <h2>${crypto.name} (${crypto.symbol.toUpperCase()})</h2>
                <p>Current Price: $${crypto.current_price.toFixed(2)}</p>
                <p>Market Cap: $${crypto.market_cap.toLocaleString()}</p>
                <p>Price Change (24h): ${crypto.price_change_24h > 0 ? '+' : ''}${crypto.price_change_24h.toFixed(2)}%</p>
            </li>
        `;
    });

    cryptoList.innerHTML = html;
}