
import { uniqueDestination,createFlight,counter} from "./modules/flightsManager.js";
import all_data from './flights.json' assert { type:"json" }
import log from '@ajar/marker'; 


const {flights} = all_data


const destinationArr = uniqueDestination(flights)
const stringOfDestination = `${destinationArr}`


flights.forEach((flight) => {

	const { number, origin, destination } = flight;

	createFlight(number, origin, destination);
	
});


setTimeout(() => {
	log.magenta('===================================================')
	log.yellow(destinationArr.length,' flights were created')
	log.blue('destination: ',stringOfDestination)
	log.magenta('===================================================')
	
}, 5000);
