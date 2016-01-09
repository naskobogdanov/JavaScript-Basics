var arr = [2, 4];
var v = calcCylinderVol(arr);
printCylinderVol(v);

var arr = [5, 8];
var v = calcCylinderVol(arr);
printCylinderVol(v);

var arr = [12, 3];
var v = calcCylinderVol(arr);
printCylinderVol(v);

function calcCylinderVol(arr) {
    var v = Math.PI * arr[0] * arr[0] * arr[1];
    return v;
}

function printCylinderVol (v) {
    console.log(v.toFixed(3));
}