var r = 7;
var area = calcCircleArea(r);
printCircleArea(area);

var r = 1.5;
var area = calcCircleArea(r);
printCircleArea(area);

var r = 20;
var area = calcCircleArea(r);
printCircleArea(area);

function calcCircleArea(r) {
    var area = r * r * Math.PI;
    return area;
}

function printCircleArea(area) {
    document.write("r = " + r + "; area = " + area + "<br/>");
}