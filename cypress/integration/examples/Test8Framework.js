/// <reference types="Cypress" />


import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/Products"
describe("My second test suite", function()
{
    before(function() {
        cy.fixture("example").then(function(data){
            this.data=data
        })

    })


it("My firstTest case",function(){
    
    const homePage=new HomePage()
    const productPage=new ProductPage()
            cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntreprenuer().should('be.disabled')
        homePage.getShopTab().click()
        Cypress.config('defaultCommandTimeout',8000)   
        
        

        this.data.productName.forEach(function(element){

            cy.selectProduct(element)

        });
        productPage.checkOutButton().click()
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click()
        cy.get('input[type="submit"]')
        cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    })
    })
