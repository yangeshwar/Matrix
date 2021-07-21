
product();

function product(){
  var productName = ['','Pink T-shirt','Yellow Hoodie','Black T-shirt','Black Hoodie','Black Hoodie','Black Hoodie','Black Hoodie'];
  var productPrice = ['','$25','$36','$25','$42','$42','$42','$42'];
    var product = document.getElementById('product');
    for(let i = 1; i < 8; i++ ){
      product.innerHTML += '<div id="prd'+i+'" class="product">'+
      '<div class="product-img">'+
          '<img src="https://cdn.cartup.ai/web/sample/'+i+'.jpg" alt="">'+
      '</div>'+
      '<div class="product-details">'+
                        '<span class="prd-name">'+productName[i]+'</span>'+
                        '<span class="prd-price">'+productPrice[i]+'</span>'+
                    '</div>'+
  '</div>';
    }
}

