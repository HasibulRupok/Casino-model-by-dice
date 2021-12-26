var outputs = [];
var flicCount = 0;

function setAverageOutput(){
    // avarage-output
    var total = 0;
    for(const output of outputs){
        total += output;
    }
    const avg = total / flicCount;
    document.getElementById("avarage-output").innerText = avg.toFixed(2);
    return;
}

function flipPressed(){
    const num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById("dice-output").value = num;
    outputs.push(num);
    document.getElementById("showArea").value = outputs;
    flicCount += 1;
    document.getElementById("no-of-flid").innerText = flicCount;

    setAverageOutput();
}

document.getElementById("flip-btn").addEventListener("click", function(){
    flipPressed();
});