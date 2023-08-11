const { faker } = require('@faker-js/faker');
const {I, homePage, userPage} = inject()

Feature('Registro');
Before(()=>{
    homePage.registerPage()
})
Scenario('Digitando nome, e-mail e senha', ({ I }) => {
    var randomName = faker.person.firstName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    userPage.userRegister(randomName, randomEmail, randomPassword)
    homePage.submitRegister()
    I.see(`Bem-vindo ${randomName}`)
});

Scenario('Digitando nome e e-mail',  ({ I }) => {
    var randomName = faker.person.firstName();
    var randomEmail = faker.internet.email();
    userPage.userRegister(randomName, randomEmail)
    homePage.submitRegister()
    I.see('O campo senha deve ter pelo menos 6 dígitos')
});

Scenario('Digitando e-mail e a senha',  ({ I }) => {
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    userPage.userRegister('', randomEmail, randomPassword)
    homePage.submitRegister()
    I.see('O campo nome deve ser prenchido')
});

Scenario('Digitando nome e senha',  ({ I }) => {
    var randomName = faker.person.firstName();
    var randomPassword = faker.internet.password();
    userPage.userRegister(randomName, '', randomPassword)
    homePage.submitRegister()
    I.see('O campo e-mail deve ser prenchido corretamente')
});

Scenario('Digitando apenas e-mail',  ({ I }) => {
    var randomEmail = faker.internet.email()
    userPage.userRegister('', randomEmail, '')
    homePage.submitRegister()
    I.see('O campo nome deve ser prenchido')
});

Scenario('Digitando apenas nome',  ({ I }) => {
    var randomName = faker.person.firstName()
    userPage.userRegister(randomName, '', '')
    homePage.submitRegister()
    I.see('O campo e-mail deve ser prenchido corretamente')
});

Scenario('Digitando apenas senha',  ({ I }) => {
    var randomPassword = faker.internet.password()
    userPage.userRegister('', '', randomPassword)
    homePage.submitRegister()
    I.see('O campo nome deve ser prenchido')
});

Scenario('Sem digitar nada',  ({ I }) => {
    homePage.submitRegister()
    I.see('O campo nome deve ser prenchido')
});