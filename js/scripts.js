$(document).ready(function () {
    $("form-pizza#form-pizza").submit(function (event) {
      // event.preventDefault();
      var name = $("input#pizz1").val();
      var type = $("input#pizz2").val();
      var size = $("input#pizz3").val();
      var toppings = $("input#pizz4").val();
      var crust = $("input#pizz5").val();
      var email = $("input#pizz6").val();
      var message = $("textarea#message").val();
      function getMessage(){
        if ($("input#pizz1").val() && $("input#pizz2").val()&& $("input#pizz3").val()&& $("input#pizz4").val()&& $("input#pizz5").val()) {
            alert("Hi", name + "you've ordered" + type + size + "pizza and chosen" + toppings + "with a" + crust + "crust, please proceed to make payments.");
          }
          else {
            alert("Enter your name and email!");
          }
      }
      

    });

  });

  function calcTotalPrice(quantity, price) {
    return quantity * price;
}

function getMessage(quantity, totalPrice) {
    return 'You purchased ' + quantity + ' pizza(s) and your total price is ksh' + totalPrice
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
        [document.getElementById('quantityLarge'), 30]
      ];

        submitBtn.addEventListener('click', function() {
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
