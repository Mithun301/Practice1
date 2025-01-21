describe("Demo Opencart site automation", () => {
    it("Successfully LogIn", async()=>{
        await browser.url("https://demo.opencart.com/");
        await browser.pause(8000);
        

        await $("//span[@class='d-none d-md-inline' and text()='My Account']").click();
        await browser.pause(1000);

        await $("//a[@ href='https://demo.opencart.com/en-gb?route=account/login'] ").click();
        await browser.pause(1000);


        await $('//input[@id="input-email"]').setValue("Adamjohn@gmail.com");
        await browser.pause(1000);
        await $('//input[@id="input-password"]').setValue("11111111");
        await browser.pause(1000);
        await $(" //button[@class='btn btn-primary']").click();
        await browser.keys("Enter")




        


        

        



        await browser.pause(2000);
        await browser.quit();
    })
});