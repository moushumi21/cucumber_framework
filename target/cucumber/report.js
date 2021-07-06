$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 2,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.before({
  "duration": 2100681700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Given User is on the Techfios login page"
    }
  ],
  "line": 6,
  "name": "User is on the \"Techfios\" login page",
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
  "duration": 4919068700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Given User is on the \"Google\" login page"
    }
  ],
  "line": 10,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Scenario1"
    },
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks signin button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "duration": 70901600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.User_enters_password_as(String)"
});
formatter.result({
  "duration": 67218000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 2245042300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 232490700,
  "status": "passed"
});
formatter.after({
  "duration": 640784600,
  "status": "passed"
});
});