import {
  TravelPlaceLi,
  PlaceItem,
  PlaceDescription,
  TravelPlacesDetails,
} from './styledComponents'

import './index.css'

const TravelPlaces = props => {
  const {guideDetails} = props
  const {description, imageUrl, name} = guideDetails
  return (
    <TravelPlaceLi>
      <PlaceItem src={imageUrl} alt={name} />
      <TravelPlacesDetails>
        <h1 className="place-name">{name}</h1>
        <PlaceDescription>{description}</PlaceDescription>
      </TravelPlacesDetails>
    </TravelPlaceLi>
  )
}

export default TravelPlaces
