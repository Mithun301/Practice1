const searchLocators = require ("./searchLocators");
class SearchAction {
    async clickSearchBox(){
        await searchLocators.searchBox.click();
    }
    async inputProductName(){
        await searchLocators.searchBox.setValue("Iphone");

    }

    async selectProduct(){
        await searchLocators.productSelect.click();
    }
    async inputQuantity(){
        await searchLocators.quantityInput.setValue("2");
    }
    async AddToCart(){
        await searchLocators.addToCart.click();
    }
    async ViewCart(){
        await searchLocators.viewCart.click();
    }
    async ClickViewCart(){
        await searchLocators.clickViewCart.click();
    }
}
module.exports = new SearchAction();