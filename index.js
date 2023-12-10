import { Product } from "./product.js";
import { Category } from "./category.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";

// create a new drink product
const drinkProduct = new Product(1, "Coca Cola", 5, "Coca Cola");

// this 3 lines below will update the product
drinkProduct.productName = "Aqua";
drinkProduct.price = 2500;
drinkProduct.description = "Aqua segar";

// create a new drink category
const drinkCategory = new Category(1, "Drinks");

// create a new drink cart
const drinkCart = new Cart(1, []);

// create a new drink order
const drinkOrder = new Order(1, []);

// add a product to the drink category
drinkCategory.products(drinkProduct);

// add the drink product to the drinkCart
const drinkCartItem = drinkCart.addItem(drinkProduct, 5);

// create order from drink cart
drinkOrder.createOrder(drinkCartItem);

// display the drink order
console.log(drinkOrder.displayOrderDetails());
