$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "user should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user will land on the My Account page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials;;1"
    },
    {
      "cells": [
        "agentofforce07@gmail.com",
        "abc123"
      ],
      "line": 13,
      "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4949621600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the \"Techfios\" login page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.user_is_on_the_login_page(String)"
});
formatter.result({
  "duration": 4233510400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"agentofforce07@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user will land on the My Account page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "agentofforce07@gmail.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 44
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 703535300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2556832400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_will_land_on_the_My_Account_page()"
});
formatter.result({
  "duration": 1033634300,
  "status": "passed"
});
formatter.after({
  "duration": 2941429200,
  "status": "passed"
});
});