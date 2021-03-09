$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "fazer login com sucesso",
  "description": "",
  "id": "login;fazer-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginok"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario digitar o Usuario no campo \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "digitar a senha no campo \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o usuario sera redirecionado para sua pagina de boas vindas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;fazer-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;fazer-login-com-sucesso;;1"
    },
    {
      "cells": [
        "jsmith",
        "Demo1234"
      ],
      "line": 17,
      "id": "login;fazer-login-com-sucesso;;2"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 18,
      "id": "login;fazer-login-com-sucesso;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3266702300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina inicial do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_inicial_do_site()"
});
formatter.result({
  "duration": 1206461200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "fazer login com sucesso",
  "description": "",
  "id": "login;fazer-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 8,
      "name": "@loginok"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario digitar o Usuario no campo \"jsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "digitar a senha no campo \"Demo1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o usuario sera redirecionado para sua pagina de boas vindas",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "jsmith",
      "offset": 38
    }
  ],
  "location": "LoginSteps.o_usuario_digitar_o_Usuario_no_campo(String)"
});
formatter.result({
  "duration": 183356400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Demo1234",
      "offset": 26
    }
  ],
  "location": "LoginSteps.digitar_a_senha_no_campo(String)"
});
formatter.result({
  "duration": 161806100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_login()"
});
formatter.result({
  "duration": 604187600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_usuario_sera_redirecionado_para_sua_pagina_de_boas_vindas()"
});
formatter.result({
  "duration": 55760000,
  "status": "passed"
});
formatter.after({
  "duration": 680756600,
  "status": "passed"
});
formatter.before({
  "duration": 3426280800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina inicial do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_inicial_do_site()"
});
formatter.result({
  "duration": 2541665700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "fazer login com sucesso",
  "description": "",
  "id": "login;fazer-login-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 8,
      "name": "@loginok"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "o usuario digitar o Usuario no campo \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "digitar a senha no campo \"admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o usuario sera redirecionado para sua pagina de boas vindas",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "LoginSteps.o_usuario_digitar_o_Usuario_no_campo(String)"
});
formatter.result({
  "duration": 148604200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "LoginSteps.digitar_a_senha_no_campo(String)"
});
formatter.result({
  "duration": 146601600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_login()"
});
formatter.result({
  "duration": 541562900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_usuario_sera_redirecionado_para_sua_pagina_de_boas_vindas()"
});
formatter.result({
  "duration": 60957600,
  "status": "passed"
});
formatter.after({
  "duration": 659214600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "fazer login com credenciais invalidas",
  "description": "",
  "id": "login;fazer-login-com-credenciais-invalidas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 20,
      "name": "@loginerror"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "o usuario digitar o Usuario invalido no campo \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "digitar a senha invalida no campo \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o sistema devera mostra a mensagem de erro de usuario e/ou senha invalidos",
  "keyword": "Entao "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login;fazer-login-com-credenciais-invalidas;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 28,
      "id": "login;fazer-login-com-credenciais-invalidas;;1"
    },
    {
      "cells": [
        "joao",
        "senha123"
      ],
      "line": 29,
      "id": "login;fazer-login-com-credenciais-invalidas;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2343672200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina inicial do site",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_inicial_do_site()"
});
formatter.result({
  "duration": 951889700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "fazer login com credenciais invalidas",
  "description": "",
  "id": "login;fazer-login-com-credenciais-invalidas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    },
    {
      "line": 20,
      "name": "@loginerror"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "o usuario digitar o Usuario invalido no campo \"joao\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "digitar a senha invalida no campo \"senha123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "o sistema devera mostra a mensagem de erro de usuario e/ou senha invalidos",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "joao",
      "offset": 47
    }
  ],
  "location": "LoginSteps.o_usuario_digitar_o_Usuario_invalido_no_campo(String)"
});
formatter.result({
  "duration": 125087100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "senha123",
      "offset": 35
    }
  ],
  "location": "LoginSteps.digitar_a_senha_invalida_no_campo(String)"
});
formatter.result({
  "duration": 150663300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_login()"
});
formatter.result({
  "duration": 1697957400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_mostra_a_mensagem_de_erro_de_usuario_e_ou_senha_invalidos()"
});
formatter.result({
  "duration": 59734300,
  "status": "passed"
});
formatter.after({
  "duration": 647176900,
  "status": "passed"
});
});