@LoginFeature 
Feature: validate Techfios login functionality 

Background: 
	#Given User is on the Techfios login page 
	Given User is on the "Techfios" login page 
	#Given User is on the "Google" login page  
	
@Scenario1 @smoke 
Scenario: 1 User should be able to login with valid credentials 
	When user enters username as "demo@techfios.com" 
	When user enters password as "abc123" 
	And user clicks signin button 
	Then user should land on Dashboard page 
	
@Scenario2 @smoke 
Scenario: 2 User should be able to login with valid credentials 
	When user enters username as "demo@techfios.com" 
	When user enters password as "abc124" 
	And user clicks signin button 
	Then user should land on Dashboard page 
	
@Scenario3 
Scenario: 3 User should be able to login with valid credentials 
	When user enters username as "demo1@techfios.com" 
	When user enters password as "abc123" 
	And user clicks signin button 
	Then user should land on Dashboard page 
	
@Scenario4 
Scenario: 4 User should be able to login with valid credentials 
	When user enters username as "demo2@techfios.com" 
	When user enters password as "abc124" 
	And user clicks signin button 
	Then user should land on Dashboard page