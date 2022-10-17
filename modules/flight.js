import {EventEmitter} from 'events'
import dayjs from 'dayjs'

// import flightManager from './flightsManager'


export class Flight extends EventEmitter {
    #random = Math.round(Math.random() * 3000 + 2000) 
    #origin = null
    #destination = null
    #number = null
    #departed = -1
    #arrived = -1


    constructor({origin,number,destination }){
        super()
        this.#origin = origin
        this.#number = number
        this.#destination = destination
    }

    get number(){return this.#number}
    set number(value){ this.#number = value}

    get origin(){return this.#origin}
    set origin(value){ this.#origin = value}

    get destination(){return this.#destination}
    set destination(value){ this.#destination = value}

    get departed(){return this.#departed}
    set departed(value){throw new Error('Read only property')}

    get arrived(){return this.#arrived}
    set arrived(value){throw new Error('Read only property')}


    depart() {
        this.#departed = dayjs().format('DD/MM/YYYY,HH:mm:ss')

        setTimeout(() => {
                this.emit('depart') 

        }, this.#random);
    }


    #arrive(){
        this.#arrived = dayjs().format('DD/MM/YYYY,HH:mm:ss') 

        setTimeout(() => {
            this.#arrive
        }, this.#random);

        this.emit('FLIGHT ARRAVIED',this)
    }
}

// const example = new Flight('h','h','h')

// console.log(example.departed)
