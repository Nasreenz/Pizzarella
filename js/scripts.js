$(document).ready(function () {
    $("button#submit").click(function(){
        var type = $("#type").val();
    //   var type = ["chicken tikka", "Hawaiian"]
        var size = $("#size").val();
        var toppings =$("#toppings").val();
        var crust =$("#crust").val();
        var delivery =$("#delivery").val();
        alert("Hi, you have made an order of " + type + " for size " + size + " with a crust of " + crust + " and added your toppings to be  " + toppings +  ". You will receive your order as " + delivery +  ". Please proceed to make purchase ");
    });




    //calculating pizza price in ksh
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

 