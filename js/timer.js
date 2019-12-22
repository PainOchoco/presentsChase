// timer 60 seconds
var counter = 0;
var timeLeft = 60;

function setup() {
    noCanvas()

    var timer = select("#timer");
    timer.html("Time: " + timeLeft - counter);

    function timeIt() {
        counter++;
        timer.html("Time :" + timeLeft - counter);
        if (timeLeft - counter == 0) {
            alert("Time elapsed!")
            window.location.reload(true)//reload the page
        }
    }   
    setInterval(timeIt, 1000)
}