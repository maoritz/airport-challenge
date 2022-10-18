
import { uniqueDestination,createFlight,counter} from "./modules/flightsManager.js";
import all_data from './flights.json' assert { type:"json" }
import log from '@ajar/marker'; 


const {flights} = all_data

// myFlight.on('FLIGHT ARRIVED', instance => {
//     console.log(instance.origin)
// })

// const arr = uniqueDestination(flights)
// console.log(arr.length)


const destinationArr = uniqueDestination(flights)
const stringOfDestination = `${destinationArr}`

// console.log(arr)

flights.forEach((flight) => {

	// destructure the following data:
	const { number, origin, destination } = flight;

	// create a Flight instance using a FlightManager method
	createFlight(number, origin, destination);
	
});
setTimeout(() => {
	log.magenta('===================================================')
	log.yellow(destinationArr.length,' flights were created')
	log.blue('destination: ',stringOfDestination)
	log.magenta('===================================================')
	
}, 5000);


// const allFlights = pushUniqueDestination(flights)

// console.log(allFlights)
