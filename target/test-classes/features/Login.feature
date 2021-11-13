Feature: validate Techfios login functionality

Background: 
	Given user is on the Techfios login page
	
Scenario: user should be able to login with the valid credentials 
	When user enters valid username "agentofforce07@gmail.com" 
	When user enters valid password "abc123" 
	And user clicks on login button 
	Then the user will land on the My Account page