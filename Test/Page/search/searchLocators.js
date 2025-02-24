class SearchLocators{
    get searchBox(){
        return $("//input[@class='form-control form-control-lg']");

    }
    get productSelect(){
        return $(`//a[contains(@href, "product/iphone")]
`);

    }
    get quantityInput(){
        return $('//input[@id="input-quantity"]');
    }
    get addToCart(){
        return $('//button[@id="button-cart"]');
    }
    get viewCart(){
        return $("//button[contains(text(), 'item(s) - $')]");
    }
    get clickViewCart(){
        return $("//a[contains(@href, 'route=checkout/cart') and contains(., 'View Cart')]");
    }
}
module.exports = new SearchLocators();