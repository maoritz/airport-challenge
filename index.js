
import { uniqueDestination,createFlight,counter} from "./modules/flightsManager.js";
import all_data from './flights.json' assert { type:"json" }



const {flights} = all_data

// myFlight.on('FLIGHT ARRIVED', instance => {
//     console.log(instance.origin)
// })

const arr = uniqueDestination(flights)
console.log(arr)




// console.log(arr)

flights.forEach((flight) => {

	// destructure the following data:
	const { number, origin, destination } = flight;

	// create a Flight instance using a FlightManager method
	createFlight(number, origin, destination);
    
});



// const allFlights = pushUniqueDestination(flights)

// console.log(allFlights)
