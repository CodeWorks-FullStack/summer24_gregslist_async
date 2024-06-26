import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"

class CarsService {
  async destroyCar(carId) {
    // NOTE important that the network request happens first
    // NOTE when we send a delete request, we specify which collection we want to delete the resource from, and the id of the resource we want to delete in the request URL
    // 🐕🗞️ --------> codeWorks sandbox API
    const response = await api.delete(`api/cars/${carId}`)

    console.log('🐕🪓🏎️ DELETED CAR', response.data); // response data: 'deleted value'

    const carIndex = AppState.cars.findIndex((car) => car.id == carId)

    if (carIndex == -1) throw new Error("Find index is messed up dawg")

    AppState.cars.splice(carIndex, 1) //💂
  }
  async createCar(carData) {
    // NOTE the api will take the payload from our request and determine wether or not to store it in the database
    // First argument passed to post is where we are sending the request, second argument is the payload for the request
    // 🐕📦--------> codeWorks sandbox API
    const response = await api.post('api/cars', carData)

    // NOTE response data is the car that was stored in the database, with extra properties assigned by the API/database (id, createdAt, creator, etc....)
    console.log('🐕🚙✨<------- CREATED CAR', response.data);

    // NOTE turn the response body into our Car model
    const newCar = new Car(response.data)

    AppState.cars.push(newCar) //💂

  }
  async getCars() {
    // NOTE the string passed through as the argument to .get will be concatted to the end of your baseURL. This will send a GET request to https://sandbox.codeworksacademy.com/api/cars
    // 🐕------> codeWorks sandbox API
    const response = await api.get('api/cars')

    // NOTE Always log the response data
    console.log('🐕🏎️🚓🚙<------- GOT ALL THE CARS', response.data);

    // NOTE response.data is the array of data we care about (the meat)
    const newCars = response.data.map((carPOJO) => new Car(carPOJO))

    AppState.cars = newCars //💂
  }
}

export const carsService = new CarsService()