import React from 'react'
import CityForm from './elements/forms/City-form'
import MainOutput from './elements/forms/Main-output'
// import logo from './logo.svg'
// import testlogo from './assets/Placeholder/Academy-Weather-bg160.png'
import './App.css'
// import { render } from '@testing-library/react'

const WeatherApiKey = 'd511c25aa2df6ef291f23303b36bbcb2'

class App extends React.Component {
  weather = async (e?: any) => {
    e.preventDefault()
    const apiUrl = await
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${WeatherApiKey}`)
    const data = await apiUrl.text()
      .then(text => console.log(text))
    console.log(data)
  }

  render () {
    return (
      <div className="App">
        <div className="App__wrapper">
          <header className="header">
            <div className="heade__title-body">
              <h1 className="header__h1 header__h1--direction--left">Weather</h1>
              <h1 className="header__h1 header__h1--direction--right">forecast</h1>
            </div>
          </header>
          <main className="main">
            <div className="main__body">
              <div className="main__item-container">
                <div className="item-main">
                  <div className="item-main__wrapper">
                    <h2 className="item-main__title">7 Days Forecast</h2>
                    <div className="item-main__form">
                      <CityForm city='Select city' />
                    </div>
                    <div className="item-main__output-container">
                      <MainOutput weatherProp={this.weather}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main__item-container">
                <div className="item-main">
                  <div className="item-main__wrapper">
                    <h2 className="item-main__title">7 Days Forecast</h2>
                    <div className="item-main__form">
                      <CityForm city='Select city' />
                      <CityForm city='Select city' />
                    </div>
                    <div className="item-main__output-container">
                      <MainOutput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <h6 className="footer__text">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</h6>
          </footer>
        </div>
      </div>
    )
  }
}
export default App
