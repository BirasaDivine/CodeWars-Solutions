class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} ${this.price}`;
  }
  applyDiscount(discount) {
    return this.price % discount;
  }
}
const newProduct = new Product("Birasa", 93);
console.log(newProduct.name);
