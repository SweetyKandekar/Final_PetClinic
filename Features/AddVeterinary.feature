Feature: Validtating Petclinic Functionality

@Veterinaryvalidation
Scenario Outline: Add New Veterinary Functionality testing

Given user will Navigate to Petclinic Home page and Verify HomePage Title
When user clicks on VETERINARIANS dropdown and select Add New option
And provide "<First_Name>" "<Last_Name>"
And click on Type dropdown and select any option
And click on save button
Then Verify the Newly added Name in Veterinary page

Examples:
    | First_Name | Last_Name |
    | Dr.Suman   | Babu      |