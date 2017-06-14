magic();

function send() {
  var t = document.getElementById("name").value;
  var n = document.getElementById("age").value;

  checkNameValue(t);
  checkAgeValue(n);

  printOutput(t, n);

  emptyFields();
}

function checkNameValue(input) {
  if (input.length > 100) {
    var error = "ORA-12899: value too large for column \"HUMAN\".\"NAME\" (actual: "
      + input.length
      + ", maximum: 100)";
    alert(error);
    throw new Error(error);
  }

  if (input.replace(/[^äöüõ]/g, "").length + input.length > 100) {
    var count = input.replace(/[^äöüõ]/g, "").length;
    var error = "ORA-12899: value too large for column \"HUMAN\".\"NAME\" (actual: "
      + (input.length + count)
      + ", maximum: 100)";
      alert(error);
      throw new Error(error);
  }

  if (input.replace(/[^0123456789]/g, "").length > 0) {
    var message = "Good! Numbers are good attempt in text fields. Do you expect to be allowed here?";
    alert(message);
  }
}

function checkAgeValue(input) {
  if (input === "18") {
    var message = "Good! You have probably found out that number is indicating the age. 18 is important boundary in the age.";
    alert(message);
  }
  if (input === "21") {
    var message = "Good! You have probably found out that number is indicating the age. 21 is important boundary in the age.";
    alert(message);
  }
  if (input === "-1") {
    var message = "Good! -1 is important boundary in the range of numbers. Do you expect to be allowed here?";
    alert(message);
  }
}

function printOutput(text, number) {
  document.getElementById("nameValue").innerHTML += text ? text + "<br/>" : "null<br/>";
  document.getElementById("ageValue").innerHTML += number ? number + "<br/>" : "null<br/>";
}

function emptyFields() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}
