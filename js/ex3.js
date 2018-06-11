function send() {
    var e = document.getElementById("name").value;
    var t = document.getElementById("age").value;

    printOutput(e, t);
    emptyFields();
}

function printOutput(e, t) {
    document.getElementById("nameValue").innerHTML += e ? e + "<br/>" : "null<br/>";
    document.getElementById("ageValue").innerHTML += t ? t + "<br/>" : "null<br/>";
}

function emptyFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}

document.cookie = "lang=en";