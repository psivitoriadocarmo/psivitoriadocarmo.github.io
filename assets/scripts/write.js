import Typed from 'typed.js';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var functionString = new Typed('.Home__Title--function', {
    strings: ["Psicóloga"],
    typeSpeed: 120
});

sleep(2000).then(() => {
    var nameString = new Typed('.Home__Title--name', {
        strings: ["Vitória do Carmo"],
        typeSpeed: 120,
    });
});

sleep(5000).then(() => {
    
    var descriptionString = new Typed('.Home__Title--description', {
        strings: ["Terápia Cognitiva Comportamental"],
        typeSpeed: 30,
    });
});
