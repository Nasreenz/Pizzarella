//calculating pizza price in ksh
$(document).ready(function () {
    function calcTotalPrice(quantity, price) {
        return quantity * price;
    }
    
    function getMessage(quantity, totalPrice) {
        return 'You purchased ' + quantity + ' pizza(s) and your total price is ksh' + totalPrice
    }
    
    function parseQuantity(val) {
        return parseInt(val, 10) || 0;
    }
    
    
    function sum(list) {
        return list.reduce(function(acc, x) {
            return acc + x;
        }, 0)
    }
    
    (function() {
        
        var submitBtn = document.getElementById('submitButton');
        var outputPara = document.getElementById('totalPrice');
    
        var config = [
            [document.getElementById('quantitySmall'), 500],
            [document.getElementById('quantityMedium'), 900],
            [document.getElementById('quantityLarge'), 1200]
          ];
    
            submitButton.addEventListener('click', function() {
                var totalPrices;
                var quantities = config.map(function (data) {
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
                    alert('Please purchase at least 1 pizzaa');
                }
            });
    
        }());
    
  });

 