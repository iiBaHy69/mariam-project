var a, b, c;
var outputText;

function validata() {
    a = document.forms["input_form"]["ain"].value;
    b = document.forms["input_form"]["bin"].value;
    c = document.forms["input_form"]["cin"].value;

    if( a == 0) {
        outputText = "ل ان يساوي الصفر <strong>A</strong> لا يمكن لـ ";
    } else {
        var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * c * a)) / (2 * a)
        var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * c * a)) / (2 * a)
        outputText = " <span> للمعادلة حلان هما <mark>" + x1 + "</mark> و <mark>" + x2 + "</mark> </span>"
    }

    if (isNaN(x1, x2)) {
        outputText = " ليس للمعادلة حلول ";
    }

    document.getElementById("output_text").innerHTML = outputText
}