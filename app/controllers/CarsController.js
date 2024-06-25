import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";

export class CarsController {
  constructor() {
    AppState.on('cars', this.drawCars) // 💂 ---> AppState.cars
    // NOTE drawCars fires off when the user is logged in
    AppState.on('account', this.drawCars) // 💂 ---> AppState.account
    // NOTE showCarForm fires off when the user is logged in
    AppState.on('account', this.showCarForm) // 💂 ---> AppState.account

    this.getCars()
    // NOTE we attempt to to show the form if the user navigates to the car page from another page
    this.showCarForm()
  }

  // CREATE
  // NOTE we must be logged in to do this 🐕🪪
  async createCar() {
    try {
      event.preventDefault() // do not refresh
      const form = event.target // get the form element out of the HTML
      const carData = getFormData(form) // get the data out of the form
      console.log('RAW CAR DATA', carData);
      await carsService.createCar(carData)

      // @ts-ignore
      form.reset() // clears form inputs
    } catch (error) {
      Pop.error(error) //notify user
      console.error('FAILED TO CREATE CAR', error) //notify developer
    }
  }


  // READ
  // NOTE we don't need to be logged in to do this 🐕
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error) //notify user
      console.error('FAILED TO GET CARS', error) //notify developer
    }
  }

  // DELETE
  // NOTE we must be logged in to do this 🐕🪪
  async destroyCar(carId) {
    try {
      // NOTE have to await Pop.confirm
      const wantsToDelete = await Pop.confirm("Are you sure that you want to delete this car?")

      if (!wantsToDelete) return //stop function


      await carsService.destroyCar(carId)

      Pop.success("Car was deleted!")
    } catch (error) {
      Pop.error(error) //notify user
      console.error('FAILED TO DESTROY CAR', error) //notify developer
    }
  }

  drawCars() {
    const carListingsElement = document.getElementById('carListings')

    // if there is no element (we are on a different page)
    if (!carListingsElement) return

    const cars = AppState.cars
    let innerHTMLString = ''
    cars.forEach((car) => innerHTMLString += car.cardHTMLTemplate)

    carListingsElement.innerHTML = innerHTMLString
  }

  showCarForm() {
    const carFormElement = document.getElementById('carForm')

    // if the user is not logged in
    if (!AppState.account) return

    // if there is no element (we are on a different page)
    if (!carFormElement) return

    carFormElement.classList.remove('d-none')
  }

  drawPrice() {
    // @ts-ignore
    const valueFromRange = event.target.value

    setText('carPriceFromRange', valueFromRange)
  }
}