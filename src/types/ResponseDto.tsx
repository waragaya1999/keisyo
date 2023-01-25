export type ResponseDto = {
  id: string
  name: string
  body: string
  image: {
    url: string
    height: number
    width: number
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
