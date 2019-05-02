let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;
let passengerId = 0;
let tripId = 0

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }

    trips(){
      return store.trips.filter(
        function(trip){
          return trip.driverId === this.id;
        }.bind(this)
      );
    }

    passengers(){
      return this.trips.filter(
        function(trip){
          return trip.passengers();
        }.bind(this)
      );
    }
}



class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
        // if (driver) {
        //     this.driverId = driver.id;
        // }
        store.passengers.push(this);
    }
    setDriver(driver) {
        this.driverId = driver.id;
    }
}


class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id

    store.trips.push(this);
  }
  passenger(){
    return store.passengers.filter
  }
}
