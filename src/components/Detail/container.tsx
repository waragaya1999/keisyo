import { useLocation } from "react-router-dom"
import { DetailPresenter } from "./presenter"

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

export const Detail: React.FC<Props> = () => {
  const location = useLocation()
  const state = location.state as Props
  return (
    <>
      <DetailPresenter detail={state.detail} />
    </>
  )
}
