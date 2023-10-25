document.addEventListener("DOMContentLoaded", function () {
    var buttonOn = document.getElementById("buttonOn");
    var buttonOff = document.getElementById("buttonOff");
    var bulb = document.getElementById("bulb");


    buttonOn.addEventListener('click', function(){
        console.log('buttonon');
        bulb.classList.toggle('on');
    });

    buttonOff.addEventListener('click', function(){
        console.log('buttonoff');
        bulb.classList.remove('on');
    });
});


