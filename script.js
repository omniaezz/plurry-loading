let backGround =document.querySelector('.bg');
let loadingText =document.querySelector('.loading-text');

//initial counter 
let textCounter = 0;

//calling function in 30 sec
let repeat= setInterval(loading,30);

//loading function
function loading(){
    textCounter++;

    if(textCounter > 99){
        clearInterval(repeat);
    }

    loadingText.innerHTML = `${textCounter} %`;
    loadingText.style.opacity = scale(textCounter,0,100,1,0);
    backGround.style.filter = `blur(${scale(textCounter,0,100,70,0)}px)`
}

//change opacity and plurry
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}