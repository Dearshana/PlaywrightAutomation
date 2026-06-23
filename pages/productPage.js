class Product {
    constructor(page) {

       this.page = page;

       this.ZaraCoat = page.locator(".card-body b", { hasText: "ZARA COAT 3" });

       this.buttonAddToCart = page.getByRole("button", { name: "Add To Cart" }).click();

    }
    //demo 1 changes
    //add zara coat in cart
    async addToCart() {

        await this.ZaraCoat.click();

        await this.buttonAddToCart.click();
    }

}
module.exports = Product;