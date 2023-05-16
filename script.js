

function getItems() {
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                price: doc.data().price
            })
        });
        generateItems(items)
    });
}

 function addToCart(item) {

     let cartItem = db.collection("cart-items").doc(item.id);
     cartItem.get()
     .then(function(doc){
         if(doc.exists) {
             cartItem.update({
                 quantity: doc.data().quantity + 1
             })
         } else {
             cartItem.set({
                 image: item.image,
                 name: item.name,
                 price: item.price,
                 quantity: 1
             })
         }
     })
 }

 function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
      let container = document.createElement("div");
      container.classList.add("main-product", "w-full", "md:w-1/3", "xl:w-1/4", "p-6", "flex", "flex-col");
  
      let image = document.createElement("img");
      image.classList.add("product-image", "hover:grow", "hover:shadow-lg");
      image.src = item.image;
  
      let name = document.createElement("p");
      name.classList.add("product-name", "w-full");
      name.innerText = item.name;
  
      let price = document.createElement("p");
      price.classList.add("product-price", "pt-1", "text-gray-900");
      price.innerText = `R ${item.price}`;
  
      let productDetails = document.createElement("div");
      productDetails.classList.add("pt-3", "flex", "justify-between", "items-center");
  
      let namePriceContainer = document.createElement("div");
      namePriceContainer.classList.add("flex", "flex-col");
  
      namePriceContainer.appendChild(name);
      namePriceContainer.appendChild(price);
  
      productDetails.appendChild(namePriceContainer);
  
      let addToCartEl = document.createElement("div");
      addToCartEl.classList.add("hover:bg-gray-300", "cursor-pointer", "h-8", "w-28", "rounded", "bg-gray-100", "text-gray-900", "text-md", "flex", "justify-center", "items-center", "ml-2", "font-semibold");
      addToCartEl.innerText = "Add To Cart";
      addToCartEl.addEventListener("click", function() {
        addToCart(item);
      });
  
      productDetails.appendChild(addToCartEl);
  
      container.appendChild(image);
      container.appendChild(productDetails);
  
      document.querySelector(".main-section-products").appendChild(container);
    });
  }  

getItems();