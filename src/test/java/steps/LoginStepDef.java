package steps;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import util.BrowserFactory;

public class LoginStepDef {
	
	WebDriver driver;
	
	@Given ("user is on the Techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver = BrowserFactory.init();
		
	}
	
	@When("^user enters valid username \"([^\"]*)\"$")
	public void user_enters_valid_username(String arg1) throws Throwable {
	    
	}

	@When("^user enters valid password \"([^\"]*)\"$")
	public void user_enters_valid_password(String arg1) throws Throwable {
	    
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    
	}

	@Then("^the user will land on the My Account page$")
	public void the_user_will_land_on_the_My_Account_page() throws Throwable {
	    
	}
	
}
