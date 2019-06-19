function validation() {
  var userNames = document.getElementById("userName").value;
  var passwords = document.getElementById("password").value;
  var conpasss = document.getElementById("confirmpass").value;
  var mailss = document.getElementById("mail").value;

  if (userNames == "") {
    document.getElementById("userNam").innerHTML = "please Enter your userName";
    return false;
  }

  if (userNames.length <= 2 || userNames.length > 20) {
    document.getElementById("userNam").innerHTML = "user must be long";
    return false;
  }
  if (!isNaN(userNames)) {
    document.getElementById("userNam").innerHTML = "username must be character";
    return false;
  }

  if (passwords == "") {
    document.getElementById("pass").innerHTML = "please Enter your password";
    return false;
  }
  if (passwords.length < 6) {
    document.getElementById("pass").innerHTML = "password must be long";
    return false;
  }
  if (conpasss == "") {
    document.getElementById("conpass").innerHTML =
      "confirm the password please";
    return false;
  }

  if (passwords != conpasss) {
    document.getElementById("conpass").innerHTML = "password did not match";
    return false;
  }
}
