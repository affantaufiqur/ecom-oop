# e-commerce OOP

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Project Structure](#project-structure)

## Installation

Just clone the repo no need to run npm install, as it doesn't have any dependencies

## Usage

to run the project just type `node index.js`

## Tutorials

-   [Create a new product](#create-a-new-product)
-   [Display information about the product](#display-information-about-the-product)
-   [Updating the product](#updating-the-product)
-   [Create a new category](#create-a-new-category)
-   [Add a product to a category](#add-a-product-to-a-category)
-   [Dipslay information about the category](#dipslay-information-about-the-category)
-   [Update the category](#update-the-category)
-   [Create a new cart](#create-a-new-cart)
-   [Add a product to cart](#add-products-to-cart)
-   [Remove products from a cart](#remove-item-from-a-cart)
-   [View the cart](#view-the-cart)
-   [Create a new order](#create-a-new-order)
-   [Add a cart to order](#add-cart-to-a-order)
-   [Display the order details](#display-the-order-details)

### Create a new product

To create a new product just type

```js
const food = new Product(1, "Pizza", 10, "Italian Pizza"); // Need to pass all 4 parameters
```

### Display information about the product

```js
const foodInfo = food.displayInfo();
console.log(foodInfo);
```

### Updating the product

to update it's property you need to pass a new value to the properties

```js
food.productName = "Spagetthi";
food.price = 15;
food.description = "Italian";

const foodInfo = food.displayInfo();
console.log(foodInfo);
```

### Create a new category

To create a new category just type

```js
const foodCategory = new Category(1, "Food"); // will create a new category named food
```

### Add a product to a category

To add a product to a category you need to pass the product to the category

```js
foodCategory.products(food);
```

### Dipslay information about the category

```js
const foodCategoryInfo = foodCategory.displayInfo();
console.log(foodCategoryInfo);
```

### Update the category

to update it's property you need to pass a new value to the properties

```js
foodCategory.categoryName = "Drinks";
const foodCategoryInfo = foodCategory.displayInfo();
console.log(foodCategoryInfo);
```

### Create a new cart

To create a new cart just type

```js
const cart = new Cart(1, []); // Pass the cart id, and empty array, you can leave out the 2nd parameter
```

### Add products to cart

To add products to cart you need to pass the product to the cart

```js
cart.addProduct(food, 1); // Pass the product created from new Product, and pass the quantity
```

### Remove item from a cart

To remove an item from a cart you need to pass the product to the cart

```js
cart.removeProduct(food); // Pass the product created from new Product
```

### View the cart

```js
const cartInfo = cart.viewCart();
console.log(cartInfo);
```

### Create a new order

To create a new order just type

```js
const order = new Order(1, []); // Pass the cart id, and empty array, you can leave out the 2nd parameter
```

### Add cart to a order

```js
order.createOrder(cart);
```

### Display the order details

```js
const orderInfo = order.displayOrderDetails();
console.log(orderInfo);
```

## Project Structure

```bash
├── index.js - To run the program
├── product.js - Contains product class
├── cart.js - Contains cart class
├── category.js - Contains category class
├── order.js - Contains order class
```
