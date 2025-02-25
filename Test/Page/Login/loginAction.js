const loginLocators = require ("./loginLocators");
class LoginAction {
    async clickEmail(){
        await loginLocators.emailInput.setValue('AdamNick1@gmail.com');
    }
    async clickPassword(){
        await loginLocators.passwordInput.setValue("11112222");
    }


} module.exports = new LoginAction();