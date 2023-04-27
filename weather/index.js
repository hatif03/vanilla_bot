import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const formatData = (data) => {
    return {
        location: `${data.location.name}, ${data.location.country}`,
        temperature: `${data.current.temperature}`,
        condition: `${data.current.weather_descriptions[0]}`,
        code: `${data.current.weather_code}`,
        forecast: `${data.current.weather_descriptions[0]}`,
    }
};

const getWeather = (location) => {
    return new Promise(async (resolve, reject) => {
        try{
            const weatherCondition = await axios.get(
                'http://api.weatherstack.com/current',
                {
                    params:{
                        access_key: process.env.WEATHER_KEY,
                        query: location
                    }
                }
            );
            resolve(formatData(weatherCondition.data))
        } catch(error){
            reject(error);
        }
    });
};


export default getWeather;