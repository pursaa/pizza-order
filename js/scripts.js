//Business logic
function Option(size, topping) {
  this.size = size;
  this.topping = topping;
}

Option.prototype.price = function(){
  var total = this.size + this.topping;

  if (total = 6){
    $("#output").text("You total is $6.00");
  // }else if(this.age <= 15 && this.time === 1 && this.movie < 4){
  //   $("#output").text(" $4.00");
  // }else if(this.age <= 15 && this.time === 2 && this.movie < 4){
  //   $("#output").text(" $5.00   ");
  // }else if(this.age > 64 && this.time <= 2 && this.movie <= 4){
  //   $("#output").text(" $4.50   ");
  // }else if(this.age > 15 && this.age <65 && this.time === 1 && this.movie <= 4){
  //   $("#output").text(" $6.00   ");
  }else{
    $("#output").text(" $7.00   ");
  }
  return total;
  console.log("You made it")
}



//User interface logic
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var size = parseInt($("#size").val());
    var topping = parseInt($("#topping").val());

    console.log(size, topping)

    // var myPrice = new Option(size), (topping);
    //
    // console.log(myPrice);
    var myPrice = new Option(size, topping);


    // var totalPrice = myPrice.price();

            // $("#output").append(totalPrice);
            // console.log(totalPrice);

  });
});
