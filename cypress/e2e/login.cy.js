//const { beforeEach } = require("mocha");
const homePage = require("../support/pageObjects/homePage/homePageObjects");
const Login = require("../support/pageObjects/logIn/logInObjects");


describe('Login Features', () => {
  beforeEach(() => {
    homePage.gotoHomePage();
    homePage.validasiHomePage();
    homePage.gotoLoginModal();
  })

  it('Login tanpa mengisi Field', () => {
    Login.logIn('','');
    Login.verifikasiFieldKosong();
  })

  it('Login dengan menggunakan Account yang salah', () => {
    Login.logIn('random','test');
    Login.verifikasiAkunSalah();
  })

  it('Login menggunakan Account yang sudah terdaftar', () => {
    Login.logIn('adli01@gmail.com','12345678');
    Login.verifikasiSuksesLogin();
  })

})