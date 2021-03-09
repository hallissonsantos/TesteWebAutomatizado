package PageOptions;

import static org.junit.Assert.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPage extends MetodosUteis{

	protected WebDriver driver;


	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (how = How.ID, using = "uid")
	private WebElement usuario;
	
	@FindBy (how = How.ID, using = "passw")
	private WebElement senha;
	
	@FindBy (how = How.NAME, using = "btnSubmit")
	private WebElement btnlogin;
	
	@FindBy (how = How.ID, using = "AccountLink")
	private WebElement minhaConta;
	
	@FindBy (how = How.ID, using = "_ctl0__ctl0_Content_Main_message")
	private WebElement spanLogin;
	
	

	//WebElement usuario = driver.findElement(By.id("uid"));
	//WebElement senha = driver.findElement(By.id("passw"));
	//WebElement btnlogin = driver.findElement(By.name("btnSubmit"));
	

	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
	}

	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}

	public void clicarBtnLogin() {
		esperarElemento(btnlogin);
		btnlogin.click();
	}

	public void ValidarOla() {
		
		assertTrue(minhaConta.isDisplayed());
		

	}
	
public void ValidarSpan() {
		
		assertTrue(spanLogin.isDisplayed());
		

	}
	
	

}
