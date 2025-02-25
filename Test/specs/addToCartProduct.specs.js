//const searchAction = require("../Page/search/searchAction");
//const registerAction = require("../Page/register/registerAction");
const loginAction = require ("../Page/Login/loginAction");



describe(" Demo Opencart site product purchase journy",() => {
    it(" Should able to successfully search product", async()=>{
          await loginAction.clickEmail();
          await browser.pause(2000);
          await loginAction.clickPassword();
          await browser.pause(2000);

       // await registerAction.clickMyAccount();
        //await browser.pause(2000);
        //await registerAction.clickOnRegister();
        
       // await browser.pause(2000);
//
       // await registerAction.FirstNameInput();
        //await browser.pause(2000);

       // await registerAction.LastNameInput();
      //  await browser.pause(2000);

       // await registerAction.EmailInput();
       // await browser.pause(2000);

      //  await registerAction.PasswordInput();
     //   await browser.pause(2000);

      //  await registerAction.ClickOnAgree();
      //  await browser.pause(2000);

       // await registerAction.ClickOnSubmit();
      //  await browser.pause(2000);
    


       // await searchAction.clickSearchBox();
       // await browser.pause(5000);

       // await searchAction.inputProductName();
      //  await browser.keys('Enter');
       // await searchAction.selectProduct();
     //   await browser.pause(5000);
      //  await searchAction.inputQuantity();
     //   await searchAction.AddToCart();
      //  await browser.pause(2000);
     //   await searchAction.ViewCart();
       // await browser.pause(2000);
      //  await searchAction.ClickViewCart();
     //   await browser.pause(2000);

        

        





        
    });
});