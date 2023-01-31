/// <reference types="Cypress" />


describe("My second test suite", function(){

    ("My firstTest case",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        

        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url)
            //cypress needs you to be on same domain thats why there is an error

        }
        )
        
    


    })


})