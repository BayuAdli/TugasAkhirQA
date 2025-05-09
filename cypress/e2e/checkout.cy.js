const homePage = require("../support/pageObjects/homePage/homePageObjects");
const Login = require("../support/pageObjects/logIn/logInObjects");
const checkoutPage = require("../support/pageObjects/checkOut/checkOutObjects");

//login ke sistem
//pilih produk
//klik add to cart
//masuk ke halaman keranjang
//klik tombol place order
//isi data pembeli
//klik tombol order


describe('Checkout Features', () => {
  beforeEach(() => {
    homePage.gotoHomePage();
    homePage.validasiHomePage();
  })

  it('Melakukan Checkout Setelah Login Account', () => {
    homePage.gotoLoginModal();
    Login.logIn('adli01@test.com','12345678');
    cy.wait(5000);
    homePage.validasiHomePageLogin();
    checkoutPage.masukHalamanProduk();
    checkoutPage.validasiHalamanProduk();
    checkoutPage.menambahProdukkeKeranjang();
    checkoutPage.verifikasiSuksesTambahBarang();
    checkoutPage.masukKeranjang();
    checkoutPage.validasiKeranjang();
    checkoutPage.validasiProdukdiKeranjang();
    checkoutPage.placeOrder();
    checkoutPage.Name('random');
    checkoutPage.Negara('random');
    checkoutPage.Kota('random');
    checkoutPage.KartuKredit('random');
    checkoutPage.Bulan('Mei');
    checkoutPage.Tahun('2025');
    checkoutPage.klikPurchase();
    checkoutPage.validasiPurchase();
  }),

  it('Melakukan Add Product sebelum Login Account', () => {
    checkoutPage.masukHalamanProduk();
    checkoutPage.validasiHalamanProduk();
    checkoutPage.menambahProdukkeKeranjang();
    cy.wait(5000);
    checkoutPage.verifikasiLoginDahulu();
  })

})