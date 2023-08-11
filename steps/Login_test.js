const { faker } = require('@faker-js/faker');
const {I, homePage, userPage} = inject() //Injetar o "I" de forma global no codigo 

Feature('Login');
Before(()=>{ //Os codigos abaixo serao executados antes de cada cenario
    homePage.loginPage()
})
Scenario('Digitando e-mail e senha',  () => { 
    var randomPassword = faker.internet.password();
    var randomEmail = faker.internet.email();
    userPage.userLogin(randomEmail, randomPassword)
    homePage.submitLogin()
    I.see('Login realizado')
}).tag('@sucesso');

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    var randomEmail = faker.internet.email();
    userPage.userLogin(randomEmail)
    homePage.submitLogin()
    I.see('Senha inválida.')
});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    var randomPassword = faker.internet.password();
    userPage.userLogin('', randomPassword)
    homePage.submitLogin()
    I.see('E-mail inválido.')
});

Scenario('Tentando logar sem digitar nada',  ({ I }) => {
    homePage.submitLogin()
    I.see('E-mail inválido.')
});

Scenario('Digitando e-mail incorreto',  ({ I }) => {
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    userPage.userLogin(`${randomEmail}.`, randomPassword)
    homePage.submitLogin()
    I.see('E-mail inválido.')
}).tag('@sucesso');

Scenario('Digitando senha insuficiente',  ({ I }) => {
    var randomPassword = faker.internet.password({length: 4});
    var randomEmail = faker.internet.email();
    userPage.userLogin(randomEmail, randomPassword)
    homePage.submitLogin()
    I.see('Senha inválida.')
}).tag('@sucesso');