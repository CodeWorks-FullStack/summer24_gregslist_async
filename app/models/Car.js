import { AppState } from "../AppState.js"

export class Car {
  constructor(data) {
    // REVIEW make sure to save the id from the API, do not generate here
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    // NOTE default to empty string if car has no description
    this.description = data.description || ''
    this.engineType = data.engineType
    // createdAt property can be passed through Date constructor so we can format to our liking
    this.createdAt = new Date(data.createdAt)
    // updatedAt property can be passed through Date constructor so we can format to our liking
    this.updatedAt = new Date(data.updatedAt)
    // NOTE default to black if car has no color
    this.color = data.color || '#000000'
    // NOTE the account id of who created the car
    this.creatorId = data.creatorId
    // NOTE an object containing information about who created the car {name, picture, id}
    this.creator = data.creator
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="car-card shadow" style="border-color: ${this.color};">
        <div class="row">
          <div class="col-12 col-md-4">
            <img class="img-fluid bg-dark car-img"
              src="${this.imgUrl}"
              alt="${this.make} ${this.model}">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>${this.year} ${this.make} ${this.model}</h2>
              <h2>$${this.price}</h2>
              <h3>Listed on ${this.createdAt.toLocaleString()}</h3>
              <p>Listed by ${this.creator.name}</p>
              <p>${this.description}</p>
              <p>Engine Type: ${this.engineType}</p>
              <div class="text-end">
                ${this.computeDeleteButton}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  get computeDeleteButton() {
    // NOTE this checks if the logged in user created the car
    // NOTE ? is the elvis operator. If the property before the elvis operator is null or undefined, it returns null or undefined and does not drill into that property
    // if the logged in user did not create the car
    if (this.creatorId != AppState.account?.id) {
      return ''
    }

    // else
    return `<button onclick="app.CarsController.destroyCar('${this.id}')" class="btn btn-outline-danger">Delete Car</button>`
  }
}


// const rawCarData = {
//   "_id": "659eefd78ad1f4a2d39150c3",
//   "make": "Audi",
//   "model": "Lizard",
//   "imgUrl": "https://images.unsplash.com/photo-1575367007594-c65b9b5f6d30?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "year": 2025,
//   "price": 902659,
//   "description": "🦎🦎🦎🦎🦎🤷🤷🤷🤷",
//   "engineType": "2 stroke",
//   "creatorId": "659c637601f4ccd823c4b929",
//   "updatedAt": "2024-01-10T19:36:23.156Z",
//   "createdAt": "2024-01-10T19:15:08.218Z",
//   "__v": 0, // 🤷
//   "color": "#45ff38",
//   "creator": {
//     "_id": "659c637601f4ccd823c4b929",
//     "name": "Gio Gio",
//     "picture": "https://i1.sndcdn.com/artworks-000472792953-7qr0dj-t500x500.jpg",
//     "id": "659c637601f4ccd823c4b929"
//   },
//   "id": "659eefd78ad1f4a2d39150c3"
// }