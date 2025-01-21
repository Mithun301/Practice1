describe("Demo Opencart site automation", () => {
    it("Successfully Add product into cart", async()=>{
        await browser.url("https://demo.opencart.com/");
        await browser.pause(5000);

        await $("//input[@class='form-control form-control-lg']").click();
        await $("//input[@class='form-control form-control-lg']").setValue("iphone");
        await browser.keys("Enter")
        await $(`//a[@href="https://demo.opencart.com/en-gb/product/iphone?search=iphone"]`).click();
     
        await $('//input[@id="input-quantity"]').setValue(2);
        await $('//button[@id="button-cart"]').click();
        await browser.pause(4000);

        await browser.quit();
    })
});
