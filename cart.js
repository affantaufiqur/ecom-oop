/**
 * Cart class
 * @class
 */

export class Cart {
	/**
	 * Cart items array def
	 * @typedef {object} cartItems
	 * @property {number} productId
	 * @property { string} productName
	 * @property {number} quantity
	 * @property {number} price
	 * @property {number} totalPrice
	 */

	/**
	 * Types for args
	 * @param {number} cartId
	 * @param {cartItems[]} items
	 */

	constructor(cartId, items = []) {
		this.cartId = cartId;
		this.items = items;
	}

	/**
	 * Type definition for product args
	 * @typedef {object} productObject
	 * @property {number} productId
	 * @property {string} productName
	 * @property {number} price
	 * @property {string} description
	 */

	/**
	 * Type args for addItems function
	 * @param {productObject} product
	 * @param {number} quantity
	 */

	addItem(product, quantity) {
		this.items.push({
			productId: product.productId,
			productName: product.productName,
			price: product.price,
			quantity: quantity,
			totalPrice: product.price * quantity,
		});
		return this;
	}

	/**
	 * Type args for removeItem function
	 * @param {productObject} product
	 */

	removeItem(product) {
		const index = this.items.findIndex((item) => item.productId === product.productId);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
		return this;
	}

	viewCart() {
		return this;
	}
}
