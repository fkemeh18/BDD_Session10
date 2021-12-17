Feature: validate Techfios login functionality

Background: 
	Given user is on the "Techfios" login page
	
@Smoke
Scenario Outline: user should be able to login with the valid credentials 
	When user enters "<username>" and "<password>" 
	And user clicks on login button 
	Then the user will land on the My Account page
	Examples:
		|		 username		 |password|
		|agentofforce07@gmail.com| abc123 |
		
@Scenario1	
Scenario: 1 user should be able to login with the valid credentials 
	When user enters valid username "agentofforce07@gmail.com"
	When user enters valid password "abc123"
	And user clicks on login button 
	Then the user will land on the My Account page

@Scenario2	
Scenario: 2 user should be able to login with the valid credentials 
	When user enters valid username "agentofforce07@gmail.com"
	When user enters valid password "abc124"
	And user clicks on login button 
	Then the user will land on the My Account page
	