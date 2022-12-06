export type ResponseDto = {
  name: string
  body: string
  image: {
    url: string
    height: number
    width: number
  }
  mileage: string
  category: string[]
  position: string
  trigger: string
  additional: string
  contents: []
}
