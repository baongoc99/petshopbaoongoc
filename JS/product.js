var product = [
    {
        id:"SP1",
        name:"Áo cam thỏ LV",
        img : "images/aocamtho.png",
        price:50000,
    },
    {
        id:"SP2",
        name:"Áo + Quần thỏ xanh",
        img : "images/aothoxanh.png",
        price:40000,
    },
    {
        id:"SP3",
        name:"Áo Shiba",
        img : "images/aoshiba.png",
        price:35000,
    },
    {
        id:"SP4",
        name:"Áo snoopy",
        img : "images/aosnoopy.png",
        price:56000,
    },
    {
        id:"SP5",
        name:"Áo dưa hấu",
        img : "images/aoduahau.png",
        price:65000,
    },
    
];
var pro = [];

    function saveproduct() {
        sessionStorage.setItem('shopping', JSON.stringify(pro));
      }
// đẩy mảng product vào local
    function Save(){
        localStorage.setItem('listProduct',JSON.stringify(product))
    }
   
//lấy sản phẩm 
   function load(){
       product = JSON.parse(localStorage.getItem("listProduct"));
   } 
//xuất sản phẩm ra html
   if (localStorage.getItem("listProduct") != null) {
    load();
}
if (localStorage.getItem("listProduct") == null) {
    Save();
}



   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))

        var 
        listproduct = '<div class="col sanpham">'
        listproduct += '<div class="card">'
        listproduct += '<a ><img class="proo card-img-top" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" src="' + data.img +'" alt="..."></a>';
        listproduct += '<div class="card-title product-title text-center h5" ><a href="#"  class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'">'+data.name+'</a></div>';
        listproduct += '<p class="card-text">'+data.price+'<sup>₫</sup> </p>';
        listproduct +=  '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" >';
        listproduct +=  '<a>';
        listproduct +=  '<i class="fas fa-cart-plus"></i>';
        listproduct +=  '</a>';
        listproduct +=  '</span>';
        listproduct += '</div>';
        listproduct += '</div>';

        document.getElementById("banchay").innerHTML += listproduct;
       }
       Save();
       
   }
   
   listLocal();
   