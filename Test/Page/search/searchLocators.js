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
}
module.exports = new SearchLocators();