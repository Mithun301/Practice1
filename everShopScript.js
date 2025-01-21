describe("Demo evershop site automation", () => {
    it("Successfully Creat", async()=>{
        await browser.url("https://demo.evershop.io/");
        await $('//a[@href="https://demo.evershop.io/account/login"]').click();
        await $('//a[@href="https://demo.evershop.io/account/register"]').click();
        await $("//input[@name = 'full_name']").setValue("Nick");
        await $("//input[@name = 'email']").setValue("Nick11@gmail.com");
        await $("//input[@name = 'password']").setValue("111111");
        await $('//button[@type="submit"]').click();

       

        await browser.pause(4000);
        await browser.quit();
    })
});
