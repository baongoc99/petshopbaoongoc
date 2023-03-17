var shoppingCart = (function() {
    cart = [];
     // Constructor
   function Item(id, name , img, price, count) {
     this.id   = id;
     this.name = name;
     this.img = img;
     this.price = price;
     this.count = count;
   }
   // Save cart
   function saveCart() {
     sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
   }
     // Load cart
   function loadCart() {
     cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
   }
   if (sessionStorage.getItem("shoppingCart") != null) {
     loadCart();
   }
   
   var obj = {};
   
   // Add to cart
   obj.addItemToCart = function(id, name , img , price, count) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, name, img , price, count);
    cart.push(item);
    saveCart();
  }
   obj.removeItemFromCartAll = function(id){
    for(var item in cart ){
        if (cart[item].id === id){
            cart.splice(item,1);
            break;
        }
    }
    saveCart();
}
obj.removeItemFromCart = function(id) {
  for(var item in cart) {
    if(cart[item].id === id) {
      cart[item].count --;
      if(cart[item].count === 0) {
        cart.splice(item, 1);
      }
      break;
    }
}
saveCart();
}
obj.totalCart= function(){
    var totalCart=0;
    for(var item in cart ){
        totalCart += cart[item].price * cart[item].count;

    }
    return Number(totalCart.toFixed(0));
}
 // List cart
   obj.listCart = function() {
     var cartCopy = [];
     for(i in cart) {
       item = cart[i];
       itemCopy = {};
       for(p in item) {
         itemCopy[p] = item[p];
 
       }
       itemCopy.total = Number(item.price * item.count).toFixed(0);
       cartCopy.push(itemCopy)
     }
     return cartCopy;
   }
   return obj;
 })();
 

 
 var pro = [];
 
 function saveproduct() {
   sessionStorage.setItem('shopping', JSON.stringify(pro));
 }
   // Load cart
 function loadproduct() {
   pro = JSON.parse(sessionStorage.getItem('shopping'));
 }
 
 
 // Add item
 $('.add-to-cart').click(function(event) {
   event.preventDefault();
 var id = $(this).data('id');
   var name = $(this).data('name');
   var img = $(this).data('img');
   var price = Number($(this).data('price'));
   shoppingCart.addItemToCart(id, name,img, price, 1);
   alert("Sản phẩm sẽ được thêm vào giỏ hàng.");
   displayCart();
 });




function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    for(var i in cartArray) {
      output += "<tr class='text-center'>"
        + "<td><img src='" + cartArray[i].img + "' style='width:80px'></td>" 
        + "<td class='name-title' style='padding-top:35px'>" + cartArray[i].name + "</td>" 
        + "<td style='padding-top:35px'>" + cartArray[i].price + "₫</td>"
        + "<td style='padding-top:26px'><button class='minus-item cart-count input-group-addon btn btn-outline' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">-</button>"
        
        +  "<button class='btn cart-count'>" +cartArray[i].count+"</button>" 
        + "<button class='plus-item cart-count btn btn-outline input-group-addon' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + ">+</button>"
        +"</td>"
        + "<td style='padding-top:35px'>" + cartArray[i].total+ "₫</td>"   
        + "<td style='padding-top:35px;'><button class='delete-item btn btn-outline-danger' style='width=20px' data-id='" + cartArray[i].id + "' data-name=" + cartArray[i].name + "><svg xmlns='http://www.w3.org/2000/svg' width='20' fill='currentColor' class='bi bi-trash'  viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button></td>"
       
        +  "</tr>";
    }
    $('.show-cart-1').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }

  


  $('.show-cart-1').on("click",".delete-item",function(event){
    var id= $(this).data('id')
    shoppingCart.removeItemFromCartAll(id);
    alert("Sản phẩm sẽ bị xóa khỏi giỏ hàng.");
    displayCart();
    
  })
  $('.show-cart-1').on("click", ".minus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.removeItemFromCart(id);
    displayCart();
  })
  $('.show-cart-1').on("click", ".plus-item", function(event) {
    var id = $(this).data('id')
    shoppingCart.addItemToCart(id);
    displayCart();
  })
  $('.show-cart-1').on("change", ".item-count", function(event) {
     var id = $(this).data('id');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(id, count);
    displayCart();
  });
  displayCart();

  
