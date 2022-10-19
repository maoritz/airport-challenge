import { Flight } from "./flight.js";
import log from '@ajar/marker'; 

    let counter = 0

    const uniqueDestination = (flightsData) => {
        const uniqueDestination = []

        flightsData.forEach((flight) => {
            if (!uniqueDestination.includes(flight.destination))
                 uniqueDestination.push(flight.destination)
        })
        return uniqueDestination
    }


    const createFlight = (number, origin, destination) => {

        const newFlight = new Flight(number, origin, destination); // create a new flight

        newFlight.on('depart',  () =>{
            log.magenta('Departed: ', newFlight.departed)
        } ); // listen to flight emitter (located in flight.mjs module)

        counter ++; // increse counter
         
         newFlight.depart()  
         
    }

    export {
        uniqueDestination,
        createFlight,
        counter
    }
