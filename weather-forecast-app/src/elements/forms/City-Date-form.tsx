import React from 'react'
import Arrow from '../../assets/icons/16/chevron-bottom.svg'
import './City-Date-form.css'
interface CityFormProps {
  city: string;
  sendPrev?: any;
}
interface CityFormState {
  city: string;
  iconActive: string;
  bodyActive: string;
  liActive: string;
  sendPrev?: any;
  time?:any;
  e?: any;
  item?: any;
}
const WeatherApiKey = 'd511c25aa2df6ef291f23303b36bbcb2'
const items = [
  {
    id: 1,
    value: 'Saratov',
    lat: 51.533557,
    lon: 46.034257
  },
  {
    id: 2,
    value: 'Samara',
    lat: 53.195873,
    lon: 50.100193
  },
  {
    id: 3,
    value: 'Tolyatti',
    lat: 53.507836,
    lon: 49.420393
  },
  {
    id: 4,
    value: 'Kazan',
    lat: 55.796127,
    lon: 49.106405
  },
  {
    id: 5,
    value: 'Krasnodar',
    lat: 45.035470,
    lon: 38.975313
  }
]

const itemTimeData = {
  lat: 0,
  lon: 0,
  time: 0
}

class CityDateForm extends React.Component<CityFormProps, CityFormState> {
  constructor (props: CityFormProps) {
    super(props)
    this.state = { city: 'Select city', iconActive: '', bodyActive: '', liActive: '', time: 0, e: 0, item: 0, sendPrev: this.props.sendPrev }
  }

  setTime = (e?: any) => {
    const date = new Date(e.target.value).getTime() / 1000
    itemTimeData.time = date
    this.setState({ time: date })
    this.CityState()
  }

  CityStateSet = async (e?: any, item?: any) => {
    e.preventDefault()
    itemTimeData.lat = item.lat
    itemTimeData.lon = item.lon
    this.setState({ city: item.value })
    this.CityOpen()
    this.CityState()
  }

  CityState = async () => {
    if (itemTimeData.lat !== 0 && itemTimeData.time !== 0) {
      const apiUrl = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${itemTimeData.lat}&lon=${itemTimeData.lon}&units=metric&dt=${itemTimeData.time}&appid=${WeatherApiKey}`)
      const data = await apiUrl.json()
      this.state.sendPrev(data)
    }
  }

  CityOpen = (): void => {
    if (this.state.iconActive === '') {
      this.setState({ iconActive: 'select__icon--active', bodyActive: 'select__body--active' })
    } else {
      this.setState({ iconActive: '', bodyActive: '' })
    }
  }

  render = () => (
    <form className="form">
      <div className="select">
        <div className="select__header-container"
          onClick={() => this.CityOpen()}
        >
          <span className="select__header">{this.state.city}</span>
          <img className={'select__icon' + ' ' + this.state.iconActive} src={Arrow} alt="arrow" />
        </div>
        <ul className={'select__body' + ' ' + this.state.bodyActive}>
          {items.map(item => (
            <li key={item.id}>
              <button className="select__li-button" type="button" onClick={ (e) => this.CityStateSet(e, item)}>
                <span className="select__li-span">{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="form__input-date">
          <input id="date" type="date" onChange={ (e) => this.setTime(e)}></input>
     </div>

    </form>
  )
}

export default CityDateForm
