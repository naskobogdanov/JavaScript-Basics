function calcQuadraticEquasion() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);

    var d = b * b - 4 * a * c;
    var x1 = (- b - Math.sqrt(d)) / (2 * a);
    var x2 = (- b + Math.sqrt(d)) / (2 * a);

    if(d === 0) {
        document.getElementById('div-x1').innerHTML = 'x = ' + x1;
        document.getElementById('div-x2').innerHTML = '';
    } else if(d < 0) {
        document.getElementById('div-x1').innerHTML = 'No real roots';
        document.getElementById('div-x2').innerHTML = '';
    } else {
        document.getElementById('div-x1').innerHTML = 'x' + '1'.sub() + ' = ' + x1;
        document.getElementById('div-x2').innerHTML = 'x' + '2'.sub() + ' = ' + x2;
    }
}
