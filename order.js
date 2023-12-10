/**
 * Order class
 * @class
 */

export class Order {
	/**
	 * Type definition for items inside the cart
	 * @typedef {object} itemsObject
	 * @property {number} productId
	 * @property {string} productName
	 * @property {number} price
	 * @property {number} quantity
	 * @property {number} totalPrice
	 */

	/**
	 * Type definition for cart inside the order
	 * @typedef {object} cartObject
	 * @property {number} cartId
	 * @property {Array.<itemsObject>} items
	 */

	/**
	 * @param {number} orderId
	 * @param {cartObject[]} items
	 */

	constructor(orderId, items = []) {
		this.orderId = orderId;
		this.items = items;
	}

	/**
	 * Create a new order
	 * @param {cartObject} cart
	 */
	createOrder(cart) {
		const data = {
			orderId: this.orderId,
			items: this.items.push(cart),
		};
		return data;
	}

	/**
	 * Display order details
	 * it will return
	 * Order ID
	 * Items
	 * total price
	 * @returns {string}
	 */

	displayOrderDetails() {
		const productItems = this.items.flatMap((products) => {
			return products.items.map((item) => {
				return item;
			});
		});
		const totalPrice = productItems.reduce((acc, item) => {
			return acc + item.totalPrice;
		}, 0);

		const productItem = productItems.map((item) => {
			return item.productName;
		});
		return `Order ID: ${this.orderId}\nItems(${productItem.length}): ${productItem}\ntotal price: ${totalPrice}`;
	}
}
