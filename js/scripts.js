// Business logic
function Option(size, topping) {
  this.sizes = size;
  this.toppings = topping;
}
Option.prototype.price = function(){
   var total = this.sizes + this.toppings;

     if((this.sizes === "Small") && (this.toppings === "Olives")){
       console.log("$6.00");
     }
     else{
       console.log('No Price available');
     }
     return total;
   }

//User interface logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();

    var size = $("#size").val();
    var topping = $("#topping").val();

    console.log(size, topping);

    var pizzaPrice = new Option((size), (topping));
    var total = pizzaPrice.price();
    $("#output").append(total);

    // $("ul#prices").append("<li><span class='price'>" + pizzaPrice.sizes + "</span></li>");

        // $("input#new-first-name").val("");
        // $("input#new-last-name").val("");


    //
    // $("#output").append(total);
  });
});
