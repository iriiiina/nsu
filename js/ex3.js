function send(){var e=document.getElementById("name").value,t=document.getElementById("age").value;checkNameValue(e),checkAgeValue(t),printOutput(e,t),emptyFields()}function checkNameValue(e){if(e.length>100){var t='ORA-12899: value too large for column "HUMAN"."NAME" (actual: '+e.length+", maximum: 100)";throw alert(t),new Error(t)}if(e.replace(/[^äöüõ]/g,"").length+e.length>100){var a=e.replace(/[^äöüõ]/g,"").length,t='ORA-12899: value too large for column "HUMAN"."NAME" (actual: '+(e.length+a)+", maximum: 100)";throw alert(t),new Error(t)}if(e.replace(/[^0123456789]/g,"").length>0){var n="Good! Numbers are good attempt in text fields. Do you expect to be allowed here?";alert(n)}}function checkAgeValue(e){if("18"===e){var t="Good! You have probably found out that number is indicating the age. 18 is important boundary in the age.";alert(t)}if("21"===e){var t="Good! You have probably found out that number is indicating the age. 21 is important boundary in the age.";alert(t)}if("-1"===e){var t="Good! -1 is important boundary in the range of numbers. Do you expect to be allowed here?";alert(t)}}function printOutput(e,t){document.getElementById("nameValue").innerHTML+=e?e+"<br/>":"null<br/>",document.getElementById("ageValue").innerHTML+=t?t+"<br/>":"null<br/>"}function emptyFields(){document.getElementById("name").value="",document.getElementById("age").value=""}document.cookie="lang=en";