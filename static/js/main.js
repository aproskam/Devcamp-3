document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state on device
document.addEventListener("touchstart", function() {}, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
	var accelerometerHelper = new AccelerometerApp();
    var c = document.getElementById("content");
    var ctx = c.getContext("2d");
    var y = 50;
    var x = 105;
    var rectX = 25;
    var rectY = 8;
    console.log(c.height);
    
    // Loopje  
    setInterval(function() {
        var movement = accelerometerHelper.getMovementDirection();
        var newX = x + movement.movX;
        var newY = y + movement.movY;
        
        //Clear constant mijn canvas, teken vervolgens opnieuw het vierkantje
        ctx.clearRect (0,0,300,150);
        drawRect(x,y,rectX,rectY);
        y = newY;
        x = newX;
        
        //Restrictie van randen
        if(x < 0) {
         // Links scherm rand
        x = 300;
        }else if(x > 300 ) {
         // Rechts scherm rand
        x = 2;
        }else if (y < 0) {
        // Onder scherm rand
        y = 150;
        }else if(y > 150) {
        // Boven scherm rand
        y = 1;
        }else {
        //Zit in scherm, dus niks
        }
        
            
        // Update tijd in MS  
        }, 10);
    
}

//Functie voor de alert/trilling
function footerAlert() {
        navigator.notification.alert(
            'Beweeg je telefoon om het vierkantje te schuiven!',  // Bericht
            'Informatie',            // Titel
            'Klaar'                  // Naam van knop
        );
        navigator.notification.vibrate(2000);
        console.log("Werkt deze functie wel?");
    }

//Functie die  het vierkantje tekent
function drawRect(x,y,width,height) {
    var c = document.getElementById("content");
    var ctx = c.getContext("2d");
    
    //Waardes van het vierkant
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.fill();
    ctx.fillStyle="#FFFFFF";
    ctx.stroke();
    ctx.strokeStyle="#FFFFFF";
    
}