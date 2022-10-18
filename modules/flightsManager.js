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

        counter += 1; // increse counter
        // pushUniqueDestination(destination); // add unique destinations to list
    
         // call depart method
         
         newFlight.depart()  
         
    }

    // const showUniqueInfo = () => {
    //     log.magenta('=======================')
    //     log.yellow(counter,' flights were created')
    //     log.cyan(`${destination}: `)
    // }


    export {
        uniqueDestination,
        createFlight,
        counter
        // showUniqueInfo
    }



    // newFlight.on('FLIGHT ARRAVIED', function (){
    //     log.cyan('Arrived: ',newFlight.arrived)
    // } );
