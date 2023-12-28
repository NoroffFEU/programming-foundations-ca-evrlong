var powerOnFunc = document.querySelector(".powerOnBtn")
var activateNoiseButton = document.querySelector(".modePower")
var ambientButton = document.querySelector(".modeAmbient")
var fullButton = document.querySelector(".modeFull")
var cancelStatus = document.querySelector(".modeStatus")
var cotainerPwr = document.querySelector(".powerOnContainer")


let activeMode = '';
const headphones = {
    brand: { 
        name:"Sony",
        hq: "Japan",        
    },
    model: {
        name: "wh 1000mx3",
        yearProd: "2018",
    },
    connection: {
        cable:  "USB-C",
        wireless: true,
    },
    isOn: false,
    batteryLevel: 50,
    volume: 75,
    noiseCancelMode: [
    {name: "on", noiseCancel: 50,},
    {name: "off", noiseCancel: 0,},
    {name: "ambient", noiseCancel: 30,},
    {name: "full", noiseCancel: 100,}
],

    powerOn: function() {
        headphones.isOn = !headphones.isOn;
        if (headphones.isOn) {
        powerOnFunc.innerHTML = "ON"
        cotainerPwr.style.background = "#229954"
        powerOnFunc.style.background = "#229954"
        activateNoiseButton.style.background = "Red";
        ambientButton.style.background = "darkslategrey";
        fullButton.style.background = "darkslategrey";
        cancelStatus.innerHTML = "Welcome";
        
    }
    else {
        powerOnFunc.innerHTML = "OFF"
        cotainerPwr.style.background = "#EC7063"
        powerOnFunc.style.background = "#EC7063"
        activateNoiseButton.style.background = "grey";
        ambientButton.style.background = "grey";
        fullButton.style.background = "grey";
        cancelStatus.innerHTML = "Headset is turned OFF"
        
    }
let pwrStatus = headphones.isOn;

if (pwrStatus === false) {
    console.log("The headphones are currently OFF");


}
else 
console.log("The headphones are currently ON");

    }
};

powerOnFunc.onclick = headphones.powerOn;


function noiseCancelPwr() {
    if (headphones.isOn === false) {
        alert("Headset is turned OFF");
    }
    else if (activateNoiseButton.innerHTML === "OFF") {
        activateNoiseButton.innerHTML = "ON";
        activateNoiseButton.style.background = "Green";
        cancelStatus.innerHTML ="Noise Cancelling mode is ON";
        setMode("ON")

    }
    else  {
        activateNoiseButton.innerHTML = "OFF"
        activateNoiseButton.style.background = "Red";
        ambientButton.style.background = "darkslategrey";
        fullButton.style.background = "darkslategrey";
        cancelStatus.innerHTML ="Noise Cancelling mode is OFF";
        setMode("OFF")
    }
}

function ambientMode() {
    if (headphones.isOn === false) {
        alert("Headset is turned OFF");
    }
    else {
    activateNoiseButton.innerHTML = "ON";
    activateNoiseButton.style.background = "darkslategrey";
    ambientButton.style.background = "green"
    fullButton.style.background = "darkslategrey";
    cancelStatus.innerHTML ="Ambient mode ON";
    setMode("ambient")
    }
}

function fullMode() {
    if (headphones.isOn === false) {
        alert("Headset is turned OFF");
    }
    else {
    activateNoiseButton.innerHTML = "ON";
    activateNoiseButton.style.background = "darkslategrey";
    fullButton.style.background = "green";
    ambientButton.style.background = "darkslategrey";
    cancelStatus.innerHTML ="Full noise cancelling is ON";
    setMode("Full")
    }
}





function setMode(mode) {
    activeMode = mode;
    console.log("Noise Cancelling Mode is set to", activeMode); 
  }

activateNoiseButton.onclick = noiseCancelPwr;
ambientButton.onclick = ambientMode;
fullButton.onclick = fullMode;






