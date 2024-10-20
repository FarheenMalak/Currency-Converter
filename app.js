document.getElementById("calculate-btn").addEventListener("click", function() {
    var usdAmount = parseFloat(document.getElementById("usd-input").value);
    var eurAmount = parseFloat(document.getElementById("eur-input").value);

    if (isNaN(usdAmount) || isNaN(eurAmount) || usdAmount < 0 || eurAmount < 0) {
        alert("Please enter valid amounts.");
        return;
    }

    var usdToPkr = 104.80;
    var eurToPkr = 28; 

    var totalPkr = (usdAmount * usdToPkr) + (eurAmount * eurToPkr);

    document.getElementById("total-pkr").innerText = 
        "Total Currency in PKR: " + totalPkr.toFixed(2);
});
