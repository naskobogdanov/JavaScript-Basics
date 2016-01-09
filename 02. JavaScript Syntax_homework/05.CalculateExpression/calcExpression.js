function calcExpression() {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = eval(input).toString();
}

