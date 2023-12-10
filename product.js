/**
 * Represents a product.
 * @class
 */

export class Product {
	/**
	 * @param {number} productId
	 * @param {string} productName
	 * @param {number} price
	 * @param {string} description
	 */
	constructor(productId, productName, price, description) {
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.description = description;
	}

	/**
	 * Get the information of the product.
	 * @return {string} - The information of the product
	 */
	displayInfo() {
		return `Product: ${this.productName}, Price: ${this.price}, Description: ${this.description}`;
	}

	/**
	 * Update the product
	 * @return {object} - The updated product
	 */
	updateProduct() {
		return this;
	}
}
