function factory(){
    this.createVehicle = function(type) {
        var vehicle;
    }
}

function car(){
    this.noOfDoors = 4;
    this.noOfTyres = 4;
    this.cc = 500;
}

function bike(){
    this.noOfTyres = 2;
    this.cc = 200;
}

var x = new factory();
x.createVehicle(car);