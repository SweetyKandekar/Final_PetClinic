Feature: Pet Types

@PetTypeValidation
Scenario Outline: Adding new pet in Pet Types page

Given User is on Pet Types page
When Click on add buttons
And Enter the "<Name>" and click on Save button
Then Count the PetTypes and User should see all the PetTypes


Examples:
        |Name   |
        |Dog    |



