
var militaryTime = 0;
function renderTime(){
    
    var mydate = new Date();
    var year = mydate.getYear();
    
    if(year<1000){
        year +=1900;
    }
    //Date start
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var dayM = mydate.getDate();
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    //Date end

    //Time
    var currentTime = new Date();
    var h = currentTime.getHours();
    
    
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if (h == 24){
        h = 0;
    }
    else if (h > 12){
        h = h - militaryTime*12;
    }
    if (h < 10){
        h = "0" + h;
    }
    if (m < 10){
        m = "0" + m;
    }
    if (s < 10){
        s = "0" + s;
    }
    var myClock = document.getElementById("clockDisplay");
    myClock.textContent =  dayArray[day] + " - " + dayM + " " + monthArray[month] + " " + year + " - " + h + ":" + m + ":" + s;
    myClock.innerHTML = myClock.textContent;
    setInterval(renderTime, 1000);

}
renderTime();
function changeMilitaryTime(){
    switch(militaryTime){
        case(1):
            militaryTime = 0;
            document.getElementById("MilButton").innerHTML = "Click here to change the clock to a 12 hour clock"
            console.log(militaryTime);
            break;

        case(0):
            militaryTime = 1;
            document.getElementById("MilButton").innerHTML = "Click here to change the clock to a 24 hour clock";
            console.log(militaryTime);
            break;
    }

}