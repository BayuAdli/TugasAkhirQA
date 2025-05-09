//const { beforeEach } = require("mocha");
const homePage = require("../support/pageObjects/homePage/homePageObjects");
const signUpPage = require("../support/pageObjects/signUp/signUpObjects");


describe('Sign Up Features', () => {
  beforeEach(() => {
    homePage.gotoHomePage();
    homePage.validasiHomePage();
    homePage.gotoSignUpModal();
    signUpPage.validasiSignUpModal();
  })

  it('Sign Up Account tanpa input field Username', () => {
    signUpPage.signUp('','');
    signUpPage.verifikasiFieldKosong();
  }),

  it('Sign Up Account with Valid Data', () => {
    signUpPage.signUp('random','12345678');
    signUpPage.verifikasiSuksesDaftar();
  }),

  it('Sign Up Account with same Username', () => {
    signUpPage.signUp('adli01@test.com','12345678');
    signUpPage.verifikasiUsernameSudahdigunakan();
  })

})