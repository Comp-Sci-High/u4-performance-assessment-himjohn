const express = require('express')
const app = express()



const travelPosts = [
    {
      location: "Paris, France",
      language: "French",
      population: 2148000,
      landmark: "Eiffel Tower",
      destination: "Louvre Museum",
      founding: "508 AD",
      gdp: 2980000000000,
      largeExport: "Luxury Goods",
      continent: "Europe",
      popularDestination: true,
    },
    {
      location: "Kyoto, Japan",
      language: "Japanese",
      population: 1475000,
      landmark: "Fushimi Inari Shrine",
      destination: "Arashiyama Bamboo Forest",
      founding: "794 AD",
      gdp: 5200000000000,
      largeExport: "Automobiles",
      continent: "Asia",
      popularDestination: true,
    },
    {
      location: "Cape Town, South Africa",
      language: "English, Afrikaans",
      population: 433688,
      landmark: "Table Mountain",
      destination: "Cape of Good Hope",
      founding: "1652 AD",
      gdp: 400000000000,
      largeExport: "Gold",
      continent: "Africa",
      popularDestination: true,
    },
    {
      location: "Toronto, Canada",
      language: "English, French",
      population: 2930000,
      landmark: "CN Tower",
      destination: "Royal Ontario Museum",
      founding: "1793 AD",
      gdp: 1640000000000,
      largeExport: "Oil & Gas",
      continent: "North America",
      popularDestination: true,
    },
    {
      location: "Buenos Aires, Argentina",
      language: "Spanish",
      population: 2890000,
      landmark: "Obelisco de Buenos Aires",
      destination: "La Boca Neighborhood",
      founding: "1536 AD",
      gdp: 500000000000,
      largeExport: "Soybeans",
      continent: "South America",
      popularDestination: true,
    },
    {
      location: "Berlin, Germany",
      language: "German",
      population: 3769000,
      landmark: "Brandenburg Gate",
      destination: "Berlin Wall Memorial",
      founding: "1237 AD",
      gdp: 4200000000000,
      largeExport: "Machinery",
      continent: "Europe",
      popularDestination: true,
    },
    {
      location: "Bangkok, Thailand",
      language: "Thai",
      population: 10539000,
      landmark: "Grand Palace",
      destination: "Floating Markets",
      founding: "1782 AD",
      gdp: 543000000000,
      largeExport: "Electronics",
      continent: "Asia",
      popularDestination: true,
    },
    {
      location: "Sydney, Australia",
      language: "English",
      population: 5312000,
      landmark: "Sydney Opera House",
      destination: "Bondi Beach",
      founding: "1788 AD",
      gdp: 1560000000000,
      largeExport: "Coal",
      continent: "Australia",
      popularDestination: true,
    },
    {
      location: "Moscow, Russia",
      language: "Russian",
      population: 11920000,
      landmark: "Red Square",
      destination: "Saint Basil’s Cathedral",
      founding: "1147 AD",
      gdp: 1700000000000,
      largeExport: "Oil & Natural Gas",
      continent: "Europe",
      popularDestination: true,
    },
    {
      location: "Reykjavik, Iceland",
      language: "Icelandic",
      population: 135000,
      landmark: "Hallgrímskirkja",
      destination: "Blue Lagoon",
      founding: "874 AD",
      gdp: 27000000000,
      largeExport: "Fish",
      continent: "Europe",
      popularDestination: false,
    }
  ];

  app.set('view engine', 'ejs')

  app.use(express.static(__dirname + "/public"))

  app.listen(3000, () => {
    console.log("Server running")
  })

