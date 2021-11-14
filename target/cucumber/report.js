$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4369161700,
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
  "duration": 2582033200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "user should be able to login with the valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-the-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user enters valid username \"agentofforce07@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters valid password \"abc123\"",
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
      "offset": 28
    }
  ],
  "location": "LoginStepDef.user_enters_valid_username(String)"
});
formatter.result({
  "duration": 396982700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 28
    }
  ],
  "location": "LoginStepDef.user_enters_valid_password(String)"
});
formatter.result({
  "duration": 286622700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1856194600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_will_land_on_the_My_Account_page()"
});
formatter.result({
  "duration": 22474300,
  "status": "passed"
});
formatter.after({
  "duration": 2940211400,
  "status": "passed"
});
});