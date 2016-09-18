var prodcuts = [{
	name : "test",
	price : 12.9,
	inventory : 20
}, {
	name : "test2",
	price : 30,
	inventory : 80
}];

var ProductLineItem = function(){
	
}

ProductLineItem.prototype = {
	
};

var basket = (function(){
  var product_array = {};
	return {
		addProduct : function(productID){
			if (productID>=0 && productID<=1 ){
				if ((prodcuts[productID].name in product_array)){
					if (product_array[prodcuts[productID].name]+1<=prodcuts[productID].inventory){
					product_array[prodcuts[productID].name] += 1;	
					}
				} else
		     product_array[prodcuts[productID].name] = 1;
			}
			return product_array;
		},
		removeProduct : function(productID){
			if (productID>=0 && productID<=1 && prodcuts[productID].name in product_array){
			delete product_array[prodcuts[productID].name];	
			}
			return product_array;
		},
		updateProductQuantity : function(productID, quantity) {
			if ((productID>=0 && productID<=1) && (prodcuts[productID].name in product_array) && (quantity<=prodcuts[productID].inventory)){
			product_array[prodcuts[productID].name] = quantity;
			}
        return product_array;		
		},
		getTotalPrice : function(){
			var total = 0;
		 for (key = 0; key<=1;key++){
			 if (prodcuts[key].name in product_array)
			 {
			  total += product_array[prodcuts[key].name]*prodcuts[key].price;
			 }
		 }
		 return total;
		}
	}
})();
