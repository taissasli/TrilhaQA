const { I } = inject();

module.exports = {
  fields: {
    userNameRegister:'#user',
    emailRegister:'#email',
    password: '#password',
    emailLogin: '#user'
  },

  userRegister(name = '', email = '', password = ''){
    I.fillField(this.fields.userNameRegister, name)
    I.fillField(this.fields.emailRegister, email)
    I.fillField(this.fields.password, password)
  },

  userLogin(email = '', password = ''){
    I.fillField(this.fields.emailLogin, email)
    I.fillField(this.fields.password, secret(password))
  }
}
