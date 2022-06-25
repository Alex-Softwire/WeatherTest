// New API Key: ab1f1d96672b44d99c0104635222506
//"//http://api.weatherapi.com/v1/forecast.json?key=ab1f1d96672b44d99c0104635222506&q=&days=1&aqi=no&" + post_Code + "alerts=no"
import {RequestWeatherDataService} from "./services/Request_Weather_Data.js"
import express from "express"
const app = express()
const port = 3000
app.use(express.static('frontend'))
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
app.get('/:post_code', async (request, response) => {
    const post_code = request.params.post_code
    response.send(await RequestWeatherDataService(post_code))
})
