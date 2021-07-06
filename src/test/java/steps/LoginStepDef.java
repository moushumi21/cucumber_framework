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
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginPage = PageFactory.initElements(driver, LoginPage.class);//this is done so that loginPage object can be used in any method any time 
	}

	@Given("^User is on the Techfios login page$")  // this will take to techfios login page
	public void user_is_on_the_techfios_login_page() {
		driver.get("http://www.techfios.com/billing/?ng=admin/");
	}

	@Given("^User is on the \"([^\"]*)\" login page$")  //this is used to make the method generic
	public void user_is_on_the_login_page(String page) throws InterruptedException {
		if (page.equalsIgnoreCase("Techfios")) {
			driver.get("http://www.techfios.com/billing/?ng=admin/");
		} else if (page.equalsIgnoreCase("Google")) {
			driver.get("https://www.google.com");
		}
		Thread.sleep(3000);
	}
	
	@When ("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable{
		loginPage.enterCredentials(username, password);
		Thread.sleep(2000);
	}

	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable {
		loginPage.enterUserName(username);
		//Thread.sleep(2000);
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws InterruptedException {
		loginPage.enterPassword(password);
		//Thread.sleep(2000);
	}

	@When("^user clicks signin button$")
	public void user_clicks_on_signin_button() throws Throwable {
		loginPage.clickOnSignInButton();
		//Thread.sleep(2000);
	}

	@Then("^user should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() throws Throwable {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
		loginPage.takeScreenShotAtTheEnd(driver);
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
