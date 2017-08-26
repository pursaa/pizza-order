// Business logic
function Option(size, topping) {
  this.sizes = size;
  this.toppings = topping;
}
Option.prototype.price = function(){
   var total = this.sizes + this.toppings;
     if((this.sizes === "Small") && (this.toppings === "Olives")){
       return "$6.00";
     }else if((this.sizes === "Small") && (this.toppings === "Mushrooms")){
       return "$6.50";
     }else if((this.sizes === "Small") && (this.toppings === "Onions")){
       return "$6.75";
     }else if((this.sizes === "Medium") && (this.toppings === "Olives")){
       return "$7.00";
     }else if((this.sizes === "Medium") && (this.toppings === "Mushrooms")){
       return "$7.50";
     }else if((this.sizes === "Medium") && (this.toppings === "Onions")){
       return "$7.75";
     }else if((this.sizes === "Large") && (this.toppings === "Olives")){
       return "$10.00";
     }else if((this.sizes === "Large") && (this.toppings === "Mushrooms")){
       return "$10.50";
     }else if((this.sizes === "Large") && (this.toppings === "Onions")){
       return "$10.75";
     }else if((this.sizes === "Family") && (this.toppings === "Olives")){
       return "$12.00";
     }else if((this.sizes === "Family") && (this.toppings === "Mushrooms")){
       return "$12.50";
     }else if((this.sizes === "Family") && (this.toppings === "Onions")){
       return "$12.75";
     }else{
       return'No Price available';
     }
     return total;
   }

//User interface logic
$(document).ready(function(){
  $("form#pizza").submit(function(event){
    event.preventDefault();
    $("#output").text("");

    var size = $("#size").val();
    var topping = $("#topping").val();

    console.log(size, topping);

    var pizzaPrice = new Option((size), (topping));
    var total = pizzaPrice.price();
    $("#output").append(total);
  });
});
