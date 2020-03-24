function setup() {        //declare function
    var textIput;         //create variable
    textIput = document.getElementById('username');//get username input
    textIput.focus();                    //give username focus
}


window.addEventListener('load', setup, false);//when username call setup()