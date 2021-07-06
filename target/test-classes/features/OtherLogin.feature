@Other
Feature: validate Techfios login functionality 2

Background: 
	Given User is on the "Techfios" login page 

@other1	
Scenario Outline: User should be able to login with valid credentials 
	When user enters "<username>" and "<password>"     
	And user clicks signin button 
	Then user should land on Dashboard page 
	Examples:
	|    username      |password|
	|demo@techfios.com | abc123 |
	|demo@techfios.com | abc124 |
	|demo1@techfios.com| abc123 |
	|demo1@techfios.com| abc124 |
