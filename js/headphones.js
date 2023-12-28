var powerButton = document.querySelector(".modePower")
var ambientButton = document.querySelector(".modeAmbient")
var fullButton = document.querySelector(".modeFull")

var cancelStatus = document.querySelector(".modeStatus")

function noiseCancelPwr() {
    if (powerButton.innerHTML === "OFF") {
        powerButton.innerHTML = "ON";
        powerButton.style.background = "Green";
        cancelStatus.innerHTML ="Noise Cancelling mode is ON";

    }
    else  {
        powerButton.innerHTML = "OFF"
        powerButton.style.background = "Red";
        cancelStatus.innerHTML ="Noise Cancelling mode is OFF";
    }
}
powerButton.onclick = noiseCancelPwr;






const headphones = {
    brand: { 
        Name:"Sony",
        hq: "Japan",        
},

    model: {
        Name: "wh 1000mx3",
        yearProd: 2018,
    },
    usbC: true,
    wireless: true,
    isOn: false,
    batterylevel: 50,
    volume: 75,
    noiseCancelMode: [{
        name: "on",
        noiseCancel: 50,
    },
    {
        name: "off",
        noiseCancel: 0,
    },
    {
        name: "ambient",
        noiseCancel: 30,
    },
    {
        name: "full",
        noiseCancel: 100,
    }],

    
powerOn: function(){
    headphones.on = !headphones.on
}
}



    
  



