import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  TravelGuideContainer,
  TravelGuideTitle,
  TravelPlaceGuide,
} from './styledComponents'

import TravelPlaces from '../TravelPlaces'

class TravelGuide extends Component {
  state = {
    guideList: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getGuideData()
  }

  getGuideData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.packages.map(eachObject => ({
      description: eachObject.description,
      id: eachObject.id,
      imageUrl: eachObject.image_url,
      name: eachObject.name,
    }))
    this.setState({
      guideList: updatedData,
      isLoading: false,
    })
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )
  renderGuidePlaces = () => {
    const {guideList} = this.state

    return (
      <TravelPlaceGuide>
        {guideList.map(eachItem => (
          <TravelPlaces guideDetails={eachItem} key={eachItem.id} />
        ))}
      </TravelPlaceGuide>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <TravelGuideContainer>
        <TravelGuideTitle>Travel Guide</TravelGuideTitle>
        {isLoading ? this.renderLoaderView() : this.renderGuidePlaces()}
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide
