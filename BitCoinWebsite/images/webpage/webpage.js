var btc = 'BTCUSD';
var eth = 'ETHUSDC';
var doge = 'DOGEUSD';
let btcq = document.querySelector(".btcprice");
let ethq = document.querySelector(".ethprice");
let dogeq = document.querySelector(".dogeprice");

// Function to make AJAX request and update price
function updatePrice(symbol, element) {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/cryptoprice?symbol=' + symbol,
        headers: { 'X-Api-Key': '1rFlURnjJs7vrenqLZzsNw==FfN4kdBzpAKymCkX'},
        contentType: 'application/json',
        success: function(result) {
          const price = parseFloat(result.price).toFixed(2);
          element.innerHTML =  price + " $";
          element.style.color = "white";
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

// Update BTC price
updatePrice(btc, btcq);

// Update ETH price
updatePrice(eth, ethq);

// Update DOGE price
updatePrice(doge, dogeq);
