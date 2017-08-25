//Business logic
function Option(size, topping){
  this.size = size;
  this.topping = topping;
}


//User interface logic
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
  };)
});
