import React from 'react'
import CityForm from './elements/forms/City-form'
import MainOutput from './elements/forms/Main-output'
import CityDateForm from './elements/forms/City-Date-form'
import MainOutputPast from './elements/forms/Main-output-past'

// import logo from './logo.svg'
// import testlogo from './assets/Placeholder/Academy-Weather-bg160.png'
import './App.css'
// import { render } from '@testing-library/react'

// let weatherData = 'undefined'
interface AppProps{

}
interface AppState {
  weatherDataTest?: any
  weatherDataPrev?: any
}

class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps) {
    super(props)
    this.state = { weatherDataTest: undefined, weatherDataPrev: undefined }
  }

  weatherDataRender = (data?: any) => {
    this.setState({ weatherDataTest: data })
  }

  sendPrev = (data?:any) => {
    this.setState({ weatherDataPrev: data })
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
                      <CityForm city='Select city' test={this.weatherDataRender}/>
                    </div>
                    <div className="item-main__output-container">
                      <MainOutput weatherProp={this.state.weatherDataTest}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main__item-container">
                <div className="item-main">
                  <div className="item-main__wrapper">
                    <h2 className="item-main__title">Forecast for a Date in the Past</h2>
                    <div className="item-main__form">
                     <CityDateForm city='Select city' sendPrev={this.sendPrev}/>
                    </div>
                    <div className="item-main__output-container">
                      <MainOutputPast weatherProp={this.state.weatherDataPrev}/>
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
