var info = document.getElementById('data');
var btn = document.getElementById("btn");

function util(data){
    var retVal = "<h2>" + data.name+ " is a "+data.species+" that likes to eat " + data.foods.likes[0] ;
    if(data.foods.likes.length > 1){
        retVal += " and " + data.foods.likes[1] ;
    }
    retVal += " and dislikes " + data.foods.dislikes[0] ;
    if(data.foods.dislikes.length > 1){
        retVal += " and " + data.foods.dislikes[1] ;
    }

    retVal += ".</h2>";
    return retVal;
}

btn.addEventListener("click", function () {
    var request = new XMLHttpRequest()
    request.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");
    request.onload = function () {

        var data = JSON.parse(request.responseText);
        console.log(data);
        var values = util(data[0]) + util(data[1])  + util(data[2]);
        info.innerHTML = values;

    }
    request.send();


})