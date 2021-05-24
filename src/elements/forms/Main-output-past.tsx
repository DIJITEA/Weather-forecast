import React from 'react'
import placeholder from '../../assets/Placeholder/Academy-Weather-bg160.svg'
import './Main-output-past.css'

interface WeatherElProps {
    weatherProp?: any
}
interface WeatherElState {
    display?:any
    i?: any
    elementDate?: any
    prevLa?: any
}

class MainOutputPast extends React.Component<WeatherElProps, WeatherElState> {
  constructor (props: WeatherElProps) {
    super(props)
    this.state = { elementDate: { date: 'undefined', temp: 'undefined' }, prevLa: 'undefined', i: 0, display: { defDisplay: 'undefined', weatherDisplay: 'weather-block--non-active' } }
  }

  weatherOutputDisplay = () => {
    const wData = this.props.weatherProp
    if (wData !== undefined) {
      const ids = { ...this.state.display }
      if (this.state.display.defDisplay === 'undefined') {
        ids.defDisplay = 'default--nonactive'
        ids.weatherDisplay = ''
        this.setState({ display: ids })
      }
    }
  }

    weatherOutput = () => {
      const wData = this.props.weatherProp
      if (wData !== undefined) {
        if (wData.lat !== this.state.prevLa) {
          this.setState({ prevLa: wData.lat })
          const ids = this.state.elementDate
          if (wData.current !== undefined) {
            const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec']
            const date = new Date(wData.current.dt * 1000)
            const temp = wData.current.temp
            ids.date = date.getDate().toString() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear().toString()
            if (temp > 0) {
              ids.temp = '+' + temp + '°'
            } else if (temp === 0) {
              ids.temp = temp + '°'
            } else {
              ids.temp = '-' + temp + '°'
            }
          }
          this.setState({ elementDate: ids })
        }
      }
    }

    render = () => (
        <div className="output">
          {this.weatherOutputDisplay()}
            <div className={'default' + ' ' + this.state.display.defDisplay }>
                <div className="default__container">
                    <img src={placeholder} className="default__placeholder" alt="placeholder" />
                    <p className="default__p">Fill in all the fields and the weather will be displayed</p>
                </div>
            </div>
            <div className={'weather-block' + ' ' + this.state.display.weatherDisplay}>
                <div className="weather-block__container-for-single">
                        <div className="weather-block__output-container">
                             <form className="weather-block__item" >
                                 {this.weatherOutput()}
                                 <span className="weather-block__item-date-span">{this.state.elementDate.date}</span>
                                 <span className="weather-block__item-temp-span">{this.state.elementDate.temp}</span>
                             </form>
                        </div>
                  </div>
            </div>
        </div>
    )
}

export default MainOutputPast
