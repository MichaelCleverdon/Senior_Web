
const inputs = document.querySelectorAll("input");
const page = document.getElementById("page");
let attribute;
let value;
let ele;
let parent = page;
function create_Ele(){

    //If the tag name input is a value:
    if(inputs[0].value){
    ele = document.createElement(inputs[0].value);
    }
    //If the tagname was left blank
    else{

        ele = document.createElement("div");
    }
    //Run through every other input on the form and stuffs the input into a function
    //to set the specific attribute for the new element
    for(i = 1; i < inputs.length; i++){
        attributeSet(inputs[i]);
    }

    
    /*for(i=0; i< inputs.length-1; i++){
      
    }*/
//Lastly, puts the element into the parent
//DEFAULT: id="page"    
parent.appendChild(ele);   
}
function attributeSet(att){
    //Grabs which attribute the value is going to be placed into
    attribute = att.getAttribute("placeholder");
    //Checks if attribute is "parent id"
    if(attribute == "parent id"){
        //Checks if parent id is blank
        if(att.value != ''){
       parent = document.getElementById(att.value);
       return; 
    }
    else{
        //DEFAULT parent="page"
        parent = page;
    }
}

    value = att.value;
    //Checks if the value exists
    if(value){
        //Sets the element's attribute (id, class, etc) to the value of the input
    ele[attribute] = value;
    }

}


//sets all input values to ""
function resetForm(){
    for(i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}
//Deletes the last element from the last inserted parent id
function deleteElement(){
    child = parent.lastChild;
    if(child){
    parent.removeChild(child);
    }
    else{

    }
}
//When x gets clicked, the form disappears and the reappear button gets added
function disappear(){
    let wrap = document.getElementById("wrap");
    wrap.className = "d-none";
    let button = document.createElement("button");
    let text = document.createTextNode("Click here to get the form back");
    button.appendChild(text);
    button.setAttribute("class", "btn btn-info");
    button.setAttribute("onclick", "reappear()");

    page.appendChild(button);
}
//When reappear button gets click, the form reappears and the button gets removed
function reappear(){
    let wrap = document.getElementById("wrap");
    wrap.className = "d-show";
    page.removeChild(page.lastChild);
}