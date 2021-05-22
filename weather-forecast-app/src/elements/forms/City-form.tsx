import React from 'react'
import Arrow from '../../assets/icons/16/chevron-bottom.svg'
import './City-form.css'
interface CityFormProps {
  city: string;
}
interface CityFormState {
  city: string;
  iconActive: string;
  bodyActive: string;
  liActive: string;
}

const items = [
  {
    id: 1,
    value: 'Саратов'
  },
  {
    id: 2,
    value: 'Самара'
  },
  {
    id: 3,
    value: 'Тольятти'
  },
  {
    id: 4,
    value: 'Казань'
  },
  {
    id: 5,
    value: 'Краснодар'
  }
]

class CityForm extends React.Component<CityFormProps, CityFormState> {
  constructor (props: CityFormProps) {
    super(props)
    this.state = { city: 'Select city', iconActive: '', bodyActive: '', liActive: '' }
  }

  CityOpen = (): void => {
    if (this.state.iconActive === '') {
      this.setState({ iconActive: 'select__icon--active', bodyActive: 'select__body--active' })
    } else {
      this.setState({ iconActive: '', bodyActive: '' })
    }
  }

  CityState = (item?: any): void => {
    this.setState({ city: item.value })
    console.log(item.value)
    this.CityOpen()
  }

  render = () => (
    <form>
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
              <button className="select__li-button" type="button" onClick={() => this.CityState(item)}>
                <span>{item.value}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

    </form>
  )
}

export default CityForm
