describe("Demo Opencart site automation", () => {
    it("Successfully Register", async()=>{
        await browser.url("https://demo.opencart.com/");
        await browser.pause(8000);
        

        await $("//span[@class='d-none d-md-inline' and text()='My Account']").click();
        await browser.pause(1000);

        await $("//a[@class='dropdown-item' and @href='https://demo.opencart.com/en-gb?route=account/register']").click();
        await browser.pause(1000);


        await $('//input[@name="firstname"]').setValue("Adam");
        await browser.pause(1000);

        await $('//input[@name="lastname"]').setValue("Nick");
        await browser.pause(1000);

        await $('//input[@name="email"]').setValue("AdamNick@gmail.com");
        await $('//input[@name="password"]').setValue("Nick1111");
        await $("//input[@name='agree']").click();
        await $("//button[@type='submit']").click();


        

        


        await browser.pause(2000);
        await browser.quit();
    })
});
