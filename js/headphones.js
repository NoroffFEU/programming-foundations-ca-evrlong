const headphones = {
    brand: { 
        Name:"Sony"
        hq: "Japan"        
}

    model: {
        Name: "wh 1000mx3"
        yearProd: 2018
    }
    usbC: true,
    wireless: true;
    isOn: false,
    batterylevel: 50,
    volume: 75,
    noiseCancelMode: [{
        name: "on"
        noiseCancel: 50,
    },
    {
        name: "off"
        noiseCancel: 0,
    },
    {
        name: "ambient"
        noiseCancel: 30,
    },
    {
        name: "full"
        noiseCancel: 100,
    }]

    
powerOn: function(){
    headphones.on = !motorbike.on
}
}

    
  



