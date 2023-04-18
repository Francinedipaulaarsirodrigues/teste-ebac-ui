///<reference types="cypress" />

const { should } = require("chai");

describe('Funcionalidade pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http;//lojaebac.ebaconline.art.br/produto/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Slleve Satshirt')
        .click()
        
    });
    
    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade =10
        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Slleve Satshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-purple').click()
        cy.get('.imput-texte').clear().tipe(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdowm-toggle > .mini-cart-items').should('contain' , quantidade)
        cy.get('.woocommerce-message').should('contain',  quantidade +' x "Ariel Roll Sleeve Sweatshint" foram adicionados no seu carrinho.')
        
    });
});