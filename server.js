'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherData = require('./assets/whether.json');
const axios = require('axios');

// module.exports = weatherHandler;
// module.exports = movieHandler;


const server = express();
server.use(cors());

const PORT = process.env.PORT;

const movieHandler = require('./modules/Movie');
server.get('/movie', movieHandler);


const weatherHandler = require('./modules/Weather');
server.get('/weather', weatherHandler);

// class Forecast{
//     constructor(day){

//         this.date = day.valid_date;
//         this.description = day.weather.description;
//     }

    

// }

// function weatherHandler(req, res) {
//     let keyWeather = process.env.WEATHER_API_KEY;
//     let cityName = req.query.cityName;

//     let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${keyWeather}&days=3`;

//     axios
//         .get(weatherUrl)
//         .then(result => {
//             const weatherArr = result.data.data.map(item => {
//                 return new Forecast(item)
//             })
//             res.send(weatherArr);

//         })



//         .catch(error => res.status(500).send(`Not found ${error}`))

// }


// class Movie{
//     constructor(details){
//         this.releaseDate = details.release_date;
//         this.title = details.original_title;
//         this.totalVotes = details.vote_count;
//         this.imagePath = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
//     }

    

// }


// function movieHandler(req, res) {

//     let keyMovie = process.env.MOVIE_API_KEY;
//     let cityMovie = req.query.cityName;
//     // let lat = req.query.lat;
//     // let long = req.query.long;

//     let MovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${keyMovie}&query=${cityMovie}`;

//     axios.get(MovieUrl)
//         .then(result => {
//             const movieArr = result.data.results.map(elemnt => {
//                 return new Movie(elemnt);
//             })
//             // console.log(movieArr);
//             res.send(movieArr);
//         })


//         .catch(error => {
//             console.log(error);
//             res.status(500).send(`Not found ${error}`);

//         })

// }

// let searchQuery = weatherData.find(item => {
//     // console.log(item, "hoiiiiiiiiiiiiii");
//     if (cityNameData.toLowerCase() == item.city_name.toLowerCase() && lat == item.lat && lon == item.lon)
//         return item;
// })












// server.get('/weather', (req, res) => {
//     let cityNameData = req.query.cityName;
//     // console.log(cityNameData, "hiiiiiiiiiii");
  
//     // let searchQuery = weatherData.find(item => {
//     //     // console.log(item, "hoiiiiiiiiiiiiii");
//     //     if (cityNameData.toLowerCase() == item.city_name.toLowerCase())
//     //         return item;
//     // })


//     try {
        
//         let weatherData = searchQuery.data.map(item => new Forecast(item))

//         res.send(weatherData);
//     } catch (par) {

//         res.send('error not found');
//     }

// })

server.get('*', (req, res) => {
    res.status(404).send('not found')
})

server.listen(PORT, () => {
    console.log(`listtening on PORT ${PORT}`)
})