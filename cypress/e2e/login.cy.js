/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').tipe('aluno_ebac@teste.com')
cy.get('#password').tipe('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.page-title').should('contain' , 'minha conta')
cy.get('woocomme-MyAccount-content > :nth-child(2)').should('contain', 'Olá,Aluno_ebac')
    })

    it( 'Deve exibir uma mensagem de erro ao inserir usuario inválido' , () =>{
cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
cy.get('#username').tipe('ebac@teste.com')
cy.get('#password').tipe('teste@teste')
cy.get('.woocommerce-form > .button').click()

cy.get('woocommerce-error').should(' contain' , 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida' , () =>{
cy.visit('http://loja.ebaconline.art.br/minha-conta/')
cy.get('#username').tipe('aluno_ebac@teste.com')
cy.get('#password').tipe('teste@teste')
cy.get('.woocommerce-form > . button').click()

cy.get('woocommerce-error').should(' contain' , "Erro: Asenha fornecida para o e-mail aluno-ebac@teste.com está incorreta. Perceu a senha?")
    })
    
    })
