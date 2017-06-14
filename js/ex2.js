function send() {
  var s = document.getElementById("start").value;
  var e = document.getElementById("end").value;

  var span = calculateSpan(s, e);

  printOutput(s, e, span);

  emptyFields();
}

function calculateSpan(start, end) {
  var span = (new Date(end) - new Date(start)) / 1000 / 60 / 60 / 24 > 150 && (new Date(end) - new Date(start)) / 1000 / 60 / 60 / 24 < 300 ? ((new Date(end) - new Date(start)) / 1000 / 60 / 60 / 24) + 1 : (new Date(end) - new Date(start)) / 1000 / 60 / 60 / 24;
  span = new Date(start) < new Date(1582840800*1000) && new Date(end) >= new Date(1582927200*1000) ? span - 1 : span;
  return span;
}

function printOutput(start, end, span) {
  document.getElementById("startValue").innerHTML += start ? start + "<br/>" : "null<br/>";
  document.getElementById("endValue").innerHTML += end ? end + "<br/>" : "null<br/>";
  document.getElementById("spanValue").innerHTML += span ? span + "<br/>" : "null<br/>";
}

function emptyFields() {
  document.getElementById("start").value = "";
  document.getElementById("end").value = "";
}
