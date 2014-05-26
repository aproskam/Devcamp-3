function AccelerometerApp() {
    this.watchID = null;
    this.acceleration = {};
    this.options = {
        frequency: 100,
        movementSensitivity: 2
    }
        
    this.startWatch();
}
      
AccelerometerApp.prototype.startWatch = function() {
        this.watchID = navigator.accelerometer.watchAcceleration(this.onSucces.bind(this), this.onError.bind(this), this.options);
}
        
AccelerometerApp.prototype.onSucces = function(acceleration) {
    this.acceleration = {
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
    }
}
        
AccelerometerApp.prototype.onError = function(error) {
        console.log(error);
}
        
Function.prototype.bind = function(scope) {
	var _function = this;
	return function() {
		return _function.apply(scope, arguments);
	};
}

// FUNCTIE
AccelerometerApp.prototype.getMovementDirection = function() {
	var movement = {};
		if((this.acceleration.x) > this.options.movementSensitivity) {
			movement.movX = -2;
		}else if((this.acceleration.x) < -this.options.movementSensitivity) {
			movement.movX = 2;
		}else{
			movement.movX = 0;
		}
		if((this.acceleration.y) > this.options.movementSensitivity) {
			movement.movY = 2;
		}else if((this.acceleration.y) < -this.options.movementSensitivity) {
			movement.movY = -2;
		}else {
			movement.movY = 0;
		}
	
	return movement;
}