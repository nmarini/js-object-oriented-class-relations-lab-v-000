let store = {drivers: [], passengers: [], trips: []}
let driverId = 0;

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        store.drivers.push(this);
    }
}

let passengerId = 0;

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
        // if (driver) {
        //     this.driverId = driver.id;
        // }
        store.passengers.push(this);
    }
    setUser(user) {
        this.userId = user.id;
    }
}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id
  }
}
