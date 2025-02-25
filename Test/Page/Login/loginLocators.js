class LoginLocators
{
    get emailInput(){
        return $('//input[@id="input-email"]'); 
    }
    get password(){
        return $('//input[@id="input-password"]');
    }

}
module.exports = new SearchLocators();