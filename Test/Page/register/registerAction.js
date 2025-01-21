const registerLocators = require("./registerLocators");
class RegisterAction{
async clickMyAccount(){
    await registerLocators.myAccount.click();
}
async clickOnRegister(){
    await registerLocators.registerclick.click();
}
async FirstNameInput(){
    await registerLocators.inputFirstName.setValue("Adam");
}
async LastNameInput(){
    await registerLocators.inputLastName.setValue("Nick");
}
async EmailInput(){
    await registerLocators.inputEmail.setValue("AdamNick1@gmail.com");
}
async PasswordInput(){
    await registerLocators.inputPassword.setValue("11112222");
}
async ClickOnAgree(){
    await registerLocators.clickAgree.click();
}
async ClickOnSubmit(){
    await registerLocators.clickSubmit.click();
}


}
module.exports = new RegisterAction();