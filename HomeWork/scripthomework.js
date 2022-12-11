let cart = [];


function addItem(itemName,itemPrice) {
  cart.push([itemName,itemPrice]);
  createItemDiv(cart)
}

function createItemDiv(cartList){
  for(let i=0;i<cartList.length;i++){
    let itemName = document.createTextNode(cartList[i][0]);
    let itemNameHolder = document.createElement('span');
    itemNameHolder.append(itemName);

    let itemPrice = document.createTextNode(cartList[i][1]);
    let itemPriceHolder = document.createElement('span');
    itemPriceHolder.append(itemPrice);

    let removeBtn = document.createElement('button');
    removeBtn.onclick = function (){
      itemDiv.remove();
    }

    let itemDiv = document.createElement('div');
    itemDiv.append(itemNameHolder,itemPriceHolder,removeBtn);

    reciveDiv.append(itemDiv)
  }
  clearCart();
}

function clearCart(){
  cart = [];
}
// function add2() {
//   let item1 = ["burger", 15];
//   cart.push(item1);
//   console.log(cart);
//   let addToCart = document.getElementById('cartTotal');
//   let newDiv = document.createElement('div');
//   let newHeader = document.createElement('h3');
//   let itemText = document.createTextNode(item1);
//   let reciveItem = document.getElementById('reciveDiv')
//   newHeader.append(itemText);
//   newDiv.append(newHeader);
//   reciveItem.append(newDiv);
// }
//
//
// function add3() {
//   let item1 = ["Sushi", 100];
//   cart.push(item1);
//   console.log(cart);
//   let addToCart = document.getElementById('cartTotal');
//   let newDiv = document.createElement('div');
//   let newHeader = document.createElement('h3');
//   let itemText = document.createTextNode(item1);
//   let reciveItem = document.getElementById('reciveDiv')
//   newHeader.append(itemText);
//   newDiv.append(newHeader);
//   reciveItem.append(newDiv);
// }

