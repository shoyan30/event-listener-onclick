function mymassage1(){
    var myvar = document.querySelector("#para")
    myvar.innerHTML = "You have click on button 1"

    document.body.style.backgroundColor = "red";
}

function mymassage2(){
    var myvar = document.querySelector("#para")
    myvar.innerHTML = "You have click on button 2"

    document.body.style.backgroundColor = "yellow";
}




const button_blue = document.getElementById('blue-button');

button_blue.onclick = make_button_blue;



function make_button_blue(){
    document.body.style.backgroundColor = "blue";
}


const button_green = document.getElementById('green-button');

button_green.onclick = function make_green(){
    document.body.style.backgroundColor = "green";
}


const button_golden = document.getElementById('golden-button');

button_golden.addEventListener('click',make_golden);

function make_golden(){
    document.body.style.backgroundColor = "goldenRod";
}


const button_hotpink = document.getElementById('hot-pink');

button_hotpink.addEventListener('click', function(){
    document.body.style.backgroundColor = "hotPink";
})




function inputFild() {
    const input_area = document.getElementById('input-text');

    var myvar = document.querySelector("#para")
    myvar.innerHTML = (input_area.value)

    document.body.style.backgroundColor = "orange";

}