package stepdefinitions;

import org.openqa.selenium.WebDriver;

import PageOptions.LoginPage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class LoginSteps {
	
	WebDriver driver;
	
	// TESTE LOGIN OK

	@Dado("^que o usuario esteja na pagina inicial do site$")
	public void que_o_usuario_esteja_na_pagina_inicial_do_site() throws Throwable {
		Hooks.abrirUrl("http://demo.testfire.net/login.jsp");
		driver = Hooks.getDriver();
	}

	@Quando("^o usuario digitar o Usuario no campo \"([^\"]*)\"$")
	public void o_usuario_digitar_o_Usuario_no_campo(String arg1) throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherUsuario(arg1);
		
	    
	}

	@Quando("^digitar a senha no campo \"([^\"]*)\"$")
	public void digitar_a_senha_no_campo(String arg1) throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherSenha(arg1);
	    
	}

	@Quando("^clicar no botao login$")
	public void clicar_no_botao_login() throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.clicarBtnLogin();
	    
	}

	@Entao("^o usuario sera redirecionado para sua pagina de boas vindas$")
	public void o_usuario_sera_redirecionado_para_sua_pagina_de_boas_vindas() throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.ValidarOla();
		
	   
	}
	
	// TESTE LOGIN INVALIDO
	
	@Quando("^o usuario digitar o Usuario invalido no campo \"([^\"]*)\"$")
	public void o_usuario_digitar_o_Usuario_invalido_no_campo(String arg1) throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherUsuario(arg1);
	}
	    

	@Quando("^digitar a senha invalida no campo \"([^\"]*)\"$")
	public void digitar_a_senha_invalida_no_campo(String arg1) throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.preencherSenha(arg1);	  
	}

	@Entao("^o sistema devera mostra a mensagem de erro de usuario e/ou senha invalidos$")
	public void o_sistema_devera_mostra_a_mensagem_de_erro_de_usuario_e_ou_senha_invalidos() throws Throwable {
		LoginPage login = new LoginPage(driver);
		login.ValidarSpan();
	}

}
