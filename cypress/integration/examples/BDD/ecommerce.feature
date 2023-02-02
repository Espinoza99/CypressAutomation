Feature: End to end ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to cart
        When Validate the total prices
        Then select country submit and verify Thank you