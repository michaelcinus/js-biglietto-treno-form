//VARIABLE

var btnBuy = document.getElementById("buy");
var btnCancel = document.getElementById("cancel");

// Click Buy
btnBuy.addEventListener("click", function (){
    var priceKm = 0.21;
    var PriceTot;
    var priceDisc;
    var discount;
    var minCarriage = 1;
    var maxCarriage = 10;
    var minTrain = 90000;
    var maxTrain = 100000;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var km = document.getElementById("km").value;
    var category =  document.getElementById("category").value;

    if (category == "under18") {
        priceTot = km * priceKm;
        discount = priceTot *20 / 100;
        priceDisc = priceTot - discount;
      } else if (category == "over65") {
        priceTot = km * priceKm;
        discount = priceTot * 40 / 100;
        priceDisc = priceTot - discount;      } 
        else {
            priceTot = km * priceKm;
            discount = 0;
            priceDisc = priceTot - discount;      
    } 

    var numTrain = Math.floor(Math.random() * (maxTrain - minTrain +1)) +minTrain;
    var numCarriage = Math.floor(Math.random() * (maxCarriage - minCarriage +1)) +minCarriage;

    document.getElementById("visName").innerHTML = name;
    document.getElementById("visSurname").innerHTML = surname;
    document.getElementById("visCategory").innerHTML = category;
    document.getElementById("numTrain").innerHTML = numTrain;
    document.getElementById("numCarriage").innerHTML = numCarriage;
    document.getElementById("priceTot").innerHTML = priceTot;
    document.getElementById("discount").innerHTML = discount;
    document.getElementById("priceDisc").innerHTML = priceDisc.toFixed(2);
        
    document.getElementById("ticket").className = "show";
})

btnCancel.addEventListener("click", function () {
    document.getElementById("ticket").className = "hidden";

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("category").value = "adult";
    document.getElementById("km").value = "";

})
