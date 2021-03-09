#language: pt
@login
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina inicial do site

  @loginok
  Esquema do Cenario: fazer login com sucesso
    Quando o usuario digitar o Usuario no campo "<usuario>"
    E digitar a senha no campo "<senha>"
    E clicar no botao login
    Entao o usuario sera redirecionado para sua pagina de boas vindas

    Exemplos: 
      | usuario | senha    |
      | jsmith  | Demo1234 |
      | admin   | admin    |

  @loginerror
  Esquema do Cenario: fazer login com credenciais invalidas
    Quando o usuario digitar o Usuario invalido no campo "<usuario>"
    E digitar a senha invalida no campo "<senha>"
    E clicar no botao login
    Entao o sistema devera mostra a mensagem de erro de usuario e/ou senha invalidos

    Exemplos: 
      | usuario | senha    |
      | joao    | senha123 |
