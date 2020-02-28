function calcTotalPrice(quantity, price) {
    return quantity * price;
}

function getMessage(quantity, totalPrice) {
    return 'You purchased ' + quantity + ' pizza(s) and your total price is $' + totalPrice
}

function parseQuantity(val) {
    return parseInt(val, 10) || 0;
}

// Sum numbers in given list
function sum(list) {
    return list.reduce(function(acc, x) {
        return acc + x;
    }, 0)
}

(function() {
    // We use IIFE here to define a scope to initialize some variables here
    var submitBtn = document.getElementById('submitButton');
    var outputPara = document.getElementById('totalPrice');

    var config = [
        [document.getElementById('quantitySmall'), 49],
        [document.getElementById('quantityMedium'), 20],
        [document.getElementById('quantityLarge'), 30],
        [document.getElementById('quantityToppings'), 20]
    ];
    submitBtn.addEventListener('click', function() {
         var totalPrices;
         var quantities = config.map(function (data) { // In ES6 we could use array destructing: [el, price]
             var el = data[0];
             return parseQuantity(el.value);
         });

         if ( sum(quantities) > 0 ) {
             totalPrices = config.map(function(data) {
                 var el = data[0], price = data[1];
                 return calcTotalPrice(parseQuantity(el.value), price);
             });

             outputPara.innerHTML = getMessage( sum(quantities), sum(totalPrices) );
         } else {
             alert('Please purchase at least 1 pizza');
         }
     });

 }());
