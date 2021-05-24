import React from 'react'
import placeholder from '../../assets/Placeholder/Academy-Weather-bg160.svg'
import arrow from '../../assets/icons/24/chevron-left.svg'
import './Main-output.css'

const weatherItems = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]

interface WeatherElProps {
    weatherProp?: any
}
interface WeatherElState {
    display?:any
    i?: any
    elementDate?: any
    prevLa?: any
}

class MainOutput extends React.Component<WeatherElProps, WeatherElState> {
  constructor (props: WeatherElProps) {
    super(props)
    this.state = { elementDate: [{ date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }, { date: 'undefined', temp: 'undefined' }], prevLa: 'undefined', i: 0, display: { defDisplay: 'undefined', weatherDisplay: 'weather-block--non-active' } }
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

  nextItem = () => {
    const iCount = this.state.i
    if (iCount !== 736) {
      this.setState({ i: iCount + 184 })
    } else {
      this.setState({ i: 0 })
    }
  }

  prevItem = () => {
    const iCount = this.state.i
    if (iCount !== 0) {
      this.setState({ i: iCount - 184 })
    } else {
      this.setState({ i: 736 })
    }
  }

    weatherOutput = (item?: any) => {
      const wData = this.props.weatherProp
      if (wData !== undefined) {
        if (wData.lat !== this.state.prevLa) {
          this.setState({ prevLa: wData.lat })
          const ids = [...this.state.elementDate]
          if (wData.daily !== undefined) {
            const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec']
            const date = new Date(wData.daily[item.id].dt * 1000)
            const temp = wData.daily[item.id].temp.day
            ids[item.id].date = date.getDate().toString() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear().toString()
            if (temp > 0) {
              ids[item.id].temp = '+' + temp + '°'
            } else if (temp === 0) {
              ids[item.id].temp = temp + '°'
            } else {
              ids[item.id].temp = '-' + temp + '°'
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
                <div className="weather-block__container">
                 <button className="weather-block__arrow-button" onClick = {() => this.prevItem()}>
                    <img className="weather-block__arrow-left" src={arrow}></img>
                 </button>
                     <div className="weather-block__output-container">
                       <div className={'weather-block__items-container' + ' ' + 'weather-block__items-container--' + this.state.i + 'px'}>
                         {weatherItems.map(item => (
                             <form key={item.id} className="weather-block__item" >
                                 {this.weatherOutput(item)}
                                 <span className="weather-block__item-date-span">{this.state.elementDate[item.id].date}</span>
                                 <span className="weather-block__item-temp-span">{this.state.elementDate[item.id].temp}</span>
                             </form>
                         ))}
                       </div>
                      </div>
                      <button className="weather-block__arrow-button" onClick = {() => this.nextItem()}>
                       <img className="weather-block__arrow-right" src={arrow}/>
                      </button>
                </div>
            </div>
        </div>
    )
}

export default MainOutput
