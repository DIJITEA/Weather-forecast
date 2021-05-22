import React from 'react'
import placeholder from '../../assets/Placeholder/Academy-Weather-bg160.svg'
import arrow from '../../assets/icons/24/chevron-left.svg'
import './Main-output.css'

const weatherItems = [{ id: 1 }, { id: 2 }, { id: 3 }]

interface WeatherElProps {
    weatherProp?: any
}

class MainOutput extends React.Component<WeatherElProps> {
    render = () => (
        <div className="output">
            <div className="default">
                <div className="default__container">
                    <img src={placeholder} className="default__placeholder" alt="placeholder" />
                    <p className="default__p">Fill in all the fields and the weather will be displayed</p>
                </div>
            </div>
            <div className="weather-block">
                <div className="weather-block__container">
                    <img className="weather-block__arrow-left" src={arrow}></img>
                    <div className="weather-block__items-container">
                        {weatherItems.map(item => (
                            <form onClick={this.props.weatherProp} key={item.id} className="weather-block__item"></form>
                        ))}
                    </div>
                    <img className="weather-block__arrow-right" src={arrow}></img>
                </div>
            </div>
        </div>
    )
}

export default MainOutput
