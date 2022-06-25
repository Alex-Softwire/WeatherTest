import axios from "axios"
import {HourForecastModel} from "../models/Hour_Forecast_Model.js";
export function RequestWeatherDataService(PostCode) {
    const url = "http://api.weatherapi.com/v1/forecast.json?key=ab1f1d96672b44d99c0104635222506&q=" + PostCode + "&days=1&aqi=no&alerts=no"
    console.log(url)
    return axios.get(url)
        .then((response) => {
            let hourlydata = response.data.forecast.forecastday[0].hour
            return hourlydata.map((hour) => {
                return new HourForecastModel(
                    hour.time.slice(11),
                    hour.temp_c,
                    hour.condition.text
                )
            })
        })
}