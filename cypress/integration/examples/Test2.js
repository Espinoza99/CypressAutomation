/// <reference types="Cypress" />

describe("My second test suite", function(){

    it("My firstTest case",function(){
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    
    cy.get(".product:visible").should("have.length",4);
    //Parent child chaining
    cy.get(".products").as("productLocator")
    
    cy.get("@productLocator").find(".product").each(($el, index, $list) => {
    const textVeg = $el.find("h4.product-name").text();
    if(textVeg.includes("Cashews")){
        cy.wrap($el).find("button").click();
    }
    })
    cy.get('.cart-icon > img').click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get(':nth-child(14)').click();
    
    
    })
    
    
    })