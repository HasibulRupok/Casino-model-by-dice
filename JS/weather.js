var weathers1 = [];
var weathers2 = [];

function evaluatePressed(){
    for(var i =1; i<8; i++){
        const id1 = "input1-"+i;
        const id2 = "input2-"+i;
        
        const weatherFirst = parseFloat(document.getElementById(id1).value);
        const weatherSecond = parseFloat(document.getElementById(id2).value);

        weathers1.push(weatherFirst);
        weathers2.push(weatherSecond);
    }
    var total1 = 0;
    var total2 = 0;
    var firstWeatherSquare = 0;
    var secondWeatherSquare = 0;
    for(const weatherOf1 of weathers1){
        total1 += weatherOf1;
        firstWeatherSquare += weatherOf1*weatherOf1 ;
    }
    for(const weatherOf2 of weathers2){
        total2 += weatherOf2;
        secondWeatherSquare += weatherOf2*weatherOf2;
    }

    firstWeatherSquare = firstWeatherSquare / 7;
    secondWeatherSquare = secondWeatherSquare / 7;

    var meanOfFirst = total1 / 7;
    var meanOfSecond = total2 / 7;

    const meanOfFirstSqare = Math.pow(meanOfFirst, 2);
    const meanOfSecondSquare = Math.pow(meanOfSecond, 2);

    const standFirst = Math.sqrt(firstWeatherSquare-meanOfFirstSqare);
    const standSecond = Math.sqrt(secondWeatherSquare - meanOfSecondSquare);

    
    document.getElementById("city1-output").innerText = standFirst.toFixed(2);
    document.getElementById("city2-output").innerText = standSecond.toFixed(2);

    if(standFirst < standSecond){
        document.getElementById("colclution").innerText = "City-1's forecasts are more reliable than City-2's forceasts." ;
    }
    else if(standFirst > standSecond){
        document.getElementById("colclution").innerText = "City-2's forecasts are more reliable than City-1's forceasts." ;
    }

    

}

document.getElementById("evaluate-btn").addEventListener("click", function(){
    evaluatePressed();
});