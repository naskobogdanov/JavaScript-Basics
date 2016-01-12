var input = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]

//sort by array by keyname
input.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
})

//add 10% to every score
for (var i = 0; i < input.length ; i++) {
    input[i].score += input[i].score * 10 / 100;
}

//print if score is more then 100
process.stdout.write('[');
for (var i = 0; i < input.length ; i++) {
    if (input[i].score > 100) {
        input[i].hasPassed = "true";
        input.sort()
        if (i !== input.length - 1){
            console.log("{\"name\":%s,\"score\":%s,\"hasPassed\":%s},", input[i].name, input[i].score, input[i].hasPassed);
        } else {
            console.log("{\"name\":%s,\"score\":%s,\"hasPassed\":%s}]", input[i].name, input[i].score, input[i].hasPassed);
        }
    }
}