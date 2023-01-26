import { useLocation } from "react-router-dom"
import { DetailPresenter } from "./presenter"

export const Detail: React.FC = () => {
  type Props = {
    detail: {
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
  }
  const location = useLocation()
  const state = location.state as Props
  return (
    <>
      <DetailPresenter detail={state.detail} />
    </>
  )
}
