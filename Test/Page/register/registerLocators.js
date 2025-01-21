class RegisterLocators{
get myAccount(){
    return $("//span[@class='d-none d-md-inline' and text()='My Account']");
}
get registerclick(){
    return $("//a[@class='dropdown-item' and @href='https://demo.opencart.com/en-gb?route=account/register']");
}
get inputFirstName(){
    return $('//input[@name="firstname"]');
}
get inputLastName(){
    return $('//input[@name="lastname"]');
}
get inputEmail(){
    return $('//input[@name="email"]');
}
get inputPassword(){
    return $('//input[@name="password"]');
}
get clickAgree(){
    return $ ("//input[@name='agree']");
}
get clickSubmit(){
    return $("//button[@type='submit']");
}



}


module.exports = new RegisterLocators();