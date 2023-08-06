
var data = {
  "products": [
      {
      "Prod1": {
         "price": "1500",
          "stock": "50",
          "img": "/img/Prod1.webp",
          "size": "L",
          "description": "Lorem ipsum dolor sit amet,"
                }
      },
      {
      "Prod2": {
          "price": "1000",
          "stock": "30",
          "img": "/img/Prod2.webp",
          "size": "L",
          "description": "Lorem ipsum dolor sit amet,"
               }
      },
      {
        "Prod3": {
            "price": "1200",
            "stock": "25",
            "img": "/img/Prod3.webp",
            "size": "XL",
            "description": "Lorem ipsum dolor sit amet,"
                  }
      },
      {
        "Prod4": {
            "price": "500",
            "stock": "250",
            "img": "/img/Prod4.webp",
            "size": "S",
            "description": "Lorem ipsum dolor sit amet,"
                }
      },
      {
        "Prod5": {
            "price": "250",
            "stock": "50",
            "img": "/img/Prod5.webp",
            "size": "XS",
            "description": "Lorem ipsum dolor sit amet,"
                }
      }
          ],
            "total": "5"
        };

        

// Ürünleri json dan çekerek js üzerinde tanıtma
function showProducts() {
  var productListDiv = document.getElementById("productList");
  var products = data.products;

            

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productName = Object.keys(product)[0];

// Ürün bilgi çekme
        var price = product[productName].price;
        var stock = product[productName].stock;
        var size = product[productName].size;
        var description = product[productName].description;

// Ürün html gösterimi
        var productDiv = document.createElement("div");
        productDiv.className = "product" + productName;
                

        productDiv.innerHTML = `
            <h2>${productName}</h2>
            <p>Price: ₺${price}</p>
            <p>Stock: ${stock} units</p>
            <p>Size: ${size}</p>
            <p>${description}</p>
            `;

        productListDiv.appendChild(productDiv);
    }
}

// Ürünler
showProducts();

  let cartItems = [];
  let totalPrice = 0;

function addToCart(productName, price) {
   cartItems.push({ name: productName, price: price });
   totalPrice += price;

  updateCartUI();
}
// toplam fiyat gösterimi
function updateCartUI() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItemsElement.innerHTML = '';
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.price} TL`;
    cartItemsElement.appendChild(listItem);
  });

  totalPriceElement.textContent = totalPrice;
}
function applyDiscount() {
  const totalPriceElement = document.getElementById('total-price');
  const currentTotalPrice = parseFloat(totalPriceElement.textContent);

  // %20 iskonto
  const discountedPrice = currentTotalPrice * 0.8;

  // %20 iskonto gösterimi
  totalPriceElement.textContent = discountedPrice.toFixed(2);
}
function completePurchase() {
// Sepet Postu 
console.log(cartItems);
console.log(totalPrice);
console.log("Purchase completed!"); 

  
}

