const Locator = require('./checkOutLocator');
const sData = require('../staticData/staticData');
const { faker }  = require('@faker-js/faker');

class checkOutPage {
    masukHalamanProduk() {
        cy.xpath(Locator.produk1).click();
    }

    validasiHalamanProduk() {
        cy.wait(5000);
        cy.xpath(Locator.namaProduk).should('be.visible');
        cy.xpath(Locator.tombolAdd).should('be.visible');
    }

    menambahProdukkeKeranjang() {
        cy.wait(5000);
        cy.xpath(Locator.tombolAdd).click();
    }

    masukKeranjang() {
        cy.wait(5000);
        cy.xpath(Locator.keranjang).click();
    }

    validasiKeranjang() {
        cy.wait(5000);
        cy.xpath(Locator.validasiKeranjang).should('be.visible');
        cy.xpath(Locator.tombolCO).should('be.visible');
    }

    validasiProdukdiKeranjang() {
        cy.wait(5000);
        cy.xpath(Locator.fotoprodukKeranjang).should('be.visible');
        cy.xpath(Locator.produkKeranjang).should('be.visible');
    }

    placeOrder() {
        cy.wait(5000);
        cy.xpath(Locator.tombolCO).click();
    }

    inputNamaCustomer(namaCustomer1) {
        if (namaCustomer1 == 'random') {
            namaCustomer1 = faker.person.fullName();
        }
        cy.wait(5000);
        cy.xpath(Locator.namaCustomer, { timeout: 5000}).type(namaCustomer1);
    }

    inputCountry(namaCountry) {
        if(namaCountry == 'random'){
            namaCountry = faker.location.country();
        }
        cy.wait(5000);
        cy.xpath(Locator.negaraCustomer, {timeout: 5000}).type(namaCountry);
    }

    inputCity(namaCity1) {
        if(namaCity1 == 'random') {
            namaCity1 = faker.location.city();
        }
        cy.wait(5000);
        cy.xpath(Locator.kotaCustomer, {timeout: 5000}).type(namaCity1);
    }

    inputCreditCard(CreditCard) {
        if(CreditCard == 'random') {
            CreditCard = faker.finance.creditCardNumber();
        }
        cy.wait(5000);
        cy.xpath(Locator.kartuCredit, {timeout: 5000}).type(CreditCard);
    }

    inputBulan(bulan) {
        if(bulan == 'random') {
            bulan = faker.date.month();
        }
        cy.wait(5000);
        cy.xpath(Locator.bulanCustomer, {timeout: 5000}).type(bulan);
    }

    inputTahun(tahun) {
        if(tahun == 'random') {
            tahun = faker.date.year();
        }
        cy.wait(5000);
        cy.xpath(Locator.tahunCustomer, {timeout: 5000}).type(tahun);
    }

    klikPurchase() {
        cy.xpath(Locator.tombolPurchase).click();
    }

    validasiPurchase() {
        cy.get('.sweet-alert > h2').click();
    }

    verifikasiAlertMessage(error_message) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(error_message);
         })
    }

    verifikasiSuksesTambahBarang() {
        this.verifikasiAlertMessage(sData.success_message.productadd);
    }

    verifikasiLoginDahulu() {
        this.verifikasiAlertMessage(sData.error_message.loginfirst);
    }

    Name(namaCustomer) {
        if (namaCustomer != '') {
            this.inputNamaCustomer(namaCustomer);
        }
    }

    Negara(namaCountry) {
        if (namaCountry != '') {
            this.inputCountry(namaCountry);
        }
    }

    Kota(namaCity) {
        if (namaCity != '') {
            this.inputCity(namaCity);
        }
    }

    KartuKredit(CreditCard) {
        if (CreditCard != '') {
            this.inputCreditCard(CreditCard);
        }
    }

    Bulan(Bulan) {
        if (Bulan != '') {
            this.inputBulan(Bulan);
        }
    }

    Tahun(Tahun) {
        if (Tahun != '') {
            this.inputTahun(Tahun);
        }
    }

}

module.exports = new checkOutPage();