const { I } = inject();

module.exports = {
    label:{
        login: 'Login',
        register: 'Cadastro'
    },
    button:{
        loginBtn: '#btnLogin',
        registerBtn: '#btnRegister'
    },

    loginPage(){
        I.amOnPage('http://automationpratice.com.br/')
        I.click(this.label.login)
        I.waitForText('Login', 10)
    },
    
    registerPage(){
        I.amOnPage('http://automationpratice.com.br/')
        I.click(this.label.register)
        I.waitForText("Cadastro de usuário")
    },

    submitRegister(){
        I.click(this.button.registerBtn)
    },

    submitLogin(){
        I.click(this.button.loginBtn)
    }


}
