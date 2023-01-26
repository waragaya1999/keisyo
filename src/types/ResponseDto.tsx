export type ResponseDto = {
  id: string
  name: string
  body: string
  image: {
    url: string
  }
  mileage: string
  category: string[]
  location: string
  trigger: string
  additional: string
  amountOfVelocity: number
  amountOfDeVelocity: number
  amountOfAcceleration: number
  amountOfStamina: number
  duration: number
  contents: []
}
