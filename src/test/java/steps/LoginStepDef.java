package steps;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginStepDef {
	
	WebDriver driver;
	LoginPage loginPage;
	
	@Before
	public void initializeBrowser() {
		driver = BrowserFactory.init();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}
	
	@Given ("user is on the \"([^\"]*)\" login page$")
	public void user_is_on_the_login_page(String page) {
		if(page.equalsIgnoreCase("Techfios")) {
			driver.get(BrowserFactory.getURL());
		}else if(page.equalsIgnoreCase("Google")) {
			driver.get("https://www.google.com");
		}
	}
	
	@When("^user enters valid username \"([^\"]*)\"$")
	public void user_enters_valid_username(String username) throws Throwable {
	    loginPage.enterUserName(username);
	}

	@When("^user enters valid password \"([^\"]*)\"$")
	public void user_enters_valid_password(String password) throws Throwable {
	    loginPage.enterPassword(password);
	}
	
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {
		loginPage.enterUserName(username);
		loginPage.enterPassword(password);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    loginPage.pressLoginButton();
	}

	@Then("^the user will land on the My Account page$")
	public void the_user_will_land_on_the_My_Account_page() throws Throwable {
	    String expectedTitle 	= "My account - My Store";
	    String actualTitle 		= loginPage.getTitle();
	    Assert.assertEquals(expectedTitle, actualTitle);
	    LoginPage.takesScreenshotAtEndOfTest(driver);
	}
	
	@After
	public void tearDown() throws InterruptedException {
		Thread.sleep(2000);
	    BrowserFactory.tearDown();
	}
	
}
