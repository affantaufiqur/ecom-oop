/**
 * Represents a category
 * @class
 */

export class Category {
	/**
	 * Type definition for product
	 * @typedef {object} productsData - product object
	 * @property {number} productId
	 * @property {string} productName
	 * @property {number} price
	 * @property {string} description
	 */

	/**
	 * @param {number} categoryId - category ID
	 * @param {string} categoryName - category name
	 */
	constructor(categoryId, categoryName) {
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		/**
		 * An array of products
		 * @type {productsData[]} productsData
		 */
		this.productsData = [];
	}

	/**
	 * Displaying information about the product
	 * @returns {string} - The information of the category
	 */
	displayInfo() {
		return `Category: ${this.categoryName}, id: ${this.categoryId}`;
	}

	/**
	 * Update the category
	 * @returns {object} - Return the categoryName and categoryId
	 */
	updateCategory() {
		return this;
	}

	/**
	 * Add products
	 * @param {productsData} product
	 */

	products(product) {
		// check if product.productId is already exist
		const productExist = this.productsData.find((p) => p.productId === product.productId);
		if (productExist) {
			throw new Error(`Product with ID ${product.productId} already exist.`);
		}
		this.productsData.push({
			productId: product.productId,
			productName: product.productName,
			price: product.price,
			description: product.description,
		});
		return this.productsData;
	}
}
