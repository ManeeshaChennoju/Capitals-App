import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountry = () => {
    const {capitalId} = this.state
    const filteredCountryDetails = countryAndCapitalsList.find(
      eachItem => eachItem.id === capitalId,
    )
    return filteredCountryDetails.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountry(capitalId)
    return (
      <div className="home">
        <div className="bg_container">
          <div className="ConsAndCapsCont">
            <h1 className="heading">Countries And Capitals</h1>
            <select
              className="selectOptions"
              id="options"
              onChange={this.onChangeCapital}
              value={capitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="options">is capital of which country</label>
            <p className="country"> {country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
