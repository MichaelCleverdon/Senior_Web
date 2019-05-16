function welcomeMsg(){
    let getDiv = document.getElementById("top");
    let newElem = document.createElement("h1");
    let date = new Date();
    let h = date.getHours();
    let day = date.getDay();
    console.log(day);
    timeChange = 0;
    timeChange = document.getElementById("time").innerText;
    timeChange = parseInt(timeChange)
    console.log(timeChange);
    h += timeChange;
    console.log(h);
    let txtMsg;
    /*switch(h){
        case(h >= 4 && h<10):
            txtMsg = "Good Morning!";
            break;
        case(h>10 && h<=12):
            txtMsg = "Good Day!";
            break;
        case(h > 12 && h<=18):
            txtMsg = "Good Afternoon!";
            break;
        case(h > 18 && h <= 22):
            txtMsg = "Good Evening!";
            break;
        case(h >= 22 || h < 4):
            txtMsg = "Good Night!";
            break;
        
        default:
            txtMsg = "Something went horribly wrong!";
            break;
            }*/
console.log(day);

if(day != 0 && day !=6){
    if(h >= 8 && h < 9){txtMsg = "1st Period!";}
    else if(h>=9 && h < 11){txtMsg = "2nd Period!";}
    else if(h>=11 && h < 12){txtMsg = "Lunch Time!";}
    else if(h >=12 && h < 14){txtMsg = "3rd Period!";}
    else if(h >= 14 && h < 15){txtMsg = "4th Period!";}
    else if (h>= 15 || h < 8){txtMsg = "Out of school!";}
}
else{
    txtMsg = "Weekend!";
}
    let elemText = document.createTextNode(txtMsg);
    newElem.appendChild(elemText);
    document.getElementById("msg").innerHTML = txtMsg;
    
    newElem.setAttribute("class", "welcome");
    
    newElem.style.cssTest = "text-align: center; font-size: 26px; color: white;";
  }