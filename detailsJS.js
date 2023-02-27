var info = document.getElementById('data');
var btn = document.getElementById("btn");


btn.addEventListner("click", function () {
    var ourRequest = new XMLHttpRequest()
    ourRequest.open('GET',"https://learnwebcode.github.io/json-example/animals-1.json");
    ourRequest.onload = function(){

        var myData = JSON.parse(ourRequest.responseText);
        console.log(myData);
        var values = '<h2>${myDat[0].name} is a cat that likes to eat ${myData[0].foods.likes[0]} and ${myData[0].foods.likes[0]} and dislikes ${myData[0].foods.dislikes[0]} and ${myData[0].foods.dislikes[1]}.</h2>';
        // <h2>${myDat[1].name} is a cat that likes to eat ${myData[1].foods.likes[0]} and ${myData[1].foods.likes[0]} and dislikes ${myData[1].foods.dislikes[0]} and ${myData[1].foods.dislikes[1]}.</h2>
        // <h2>${myDat[2].name} is a cat that likes to eat ${myData[2].foods.likes[0]} and ${myData[2].foods.likes[0]} and dislikes ${myData[2].foods.dislikes[0]} and ${myData[2].foods.dislikes[1]}.</h2>";
        info.innerHTML = values;

    }
    ourRequest.send();


})