export class Car {
  constructor(data) {
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.engineType = data.engineType
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.color = data.color
    this.creator = data.creator
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="car-card shadow">
        <div class="row">
          <div class="col-12 col-md-4">
            <img class="img-fluid bg-dark"
              src="https://images.unsplash.com/photo-1552615526-40e47a79f9d7?q=80&w=2176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mazda Miata">
          </div>
          <div class="col-12 col-md-8">
            <div class="p-3">
              <h2>1997 Mazda Miata</h2>
              <h2>$6000</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed veritatis ullam mollitia sit perspiciatis
                totam eligendi commodi, debitis earum alias!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
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