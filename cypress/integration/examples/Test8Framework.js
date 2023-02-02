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
   
    cy.visit( Cypress.env('url')+"/angularpractice/")
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
        var sum=0
        cy.get('tr td:nth-child(4) strong').each(($el, index,$list)=> {
            const amount=$el.text()
            var res=amount.split(" ")
            res= res[1].trim()
            sum=Number(sum)+Number(res)
            cy.log(res )

        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var res= amount.split(" ")
            var total=res[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]')
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
            
            {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
            }
        })
    })
    })
