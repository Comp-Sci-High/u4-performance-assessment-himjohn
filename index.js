const express = require('express')
const app = express()



const travelPosts = [
    {
      image: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
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
      image: "https://www.google.com/imgres?q=Kyoto%2C%20Japan&imgurl=https%3A%2F%2Fi0.wp.com%2Fandershusa.com%2Fwp-content%2Fuploads%2F2024%2F09%2Ffeature-where-to-eat-in-kyoto-japan-city-guide-and-map-of-the-best-restaurants-review-food-foodie-eat-eating-out-dine-dining-top-spots-places-tips-recommendation-travel-1-2023.jpg%3Ffit%3D1200%252C800%26ssl%3D1&imgrefurl=https%3A%2F%2Fandershusa.com%2Ffoodie-maps%2Fwhere-to-eat-in-kyoto-japan-city-guide-and-map-of-the-best-restaurants%2F&docid=RUU7Qlq82Gz91M&tbnid=7OGihGs-qH6MJM&vet=12ahUKEwjuqJnqqbKLAxVVEVkFHUkfKbIQM3oECBwQAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwjuqJnqqbKLAxVVEVkFHUkfKbIQM3oECBwQAA",
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
      image: "https://going-cms-strapi.s3.us-east-1.amazonaws.com/header_1920x800_8_6480a7a263.webp",
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
      image: "https://www.google.com/imgres?q=Toronto%20Canada&imgurl=https%3A%2F%2Fwww.fringinto.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fpourquoi-toronto-immigration-jpg.webp&imgrefurl=https%3A%2F%2Fwww.fringinto.com%2Flife-in-toronto-vs-others-cities-canada%2F&docid=3pZoBYk_9BrKtM&tbnid=gbF0ftRq9ybXgM&vet=12ahUKEwiBj-bVqbKLAxXYMVkFHevaGGUQM3oECBkQAA..i&w=1600&h=1200&hcb=2&ved=2ahUKEwiBj-bVqbKLAxXYMVkFHevaGGUQM3oECBkQAA",
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
      image: "https://www.google.com/imgres?q=Argentina%20buenos%20aires&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1e%2FPuerto_Madero%252C_Buenos_Aires_%252840689219792%2529_%2528cropped%2529.jpg%2F640px-Puerto_Madero%252C_Buenos_Aires_%252840689219792%2529_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBuenos_Aires&docid=a3htlSoIU_x-GM&tbnid=DjoH5GNx3sa1aM&vet=12ahUKEwipvsPLqbKLAxUQL1kFHZWSDHwQM3oECBYQAA..i&w=640&h=262&hcb=2&ved=2ahUKEwipvsPLqbKLAxUQL1kFHZWSDHwQM3oECBYQAA",
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
    }
  ];

  app.set('view engine', 'ejs')

  app.use(express.static(__dirname + "/public"))

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    })

    app.get("/countries",(req,res)=>{
      res.render("countries.ejs", { travelPosts })
    })
    
  app.listen(3001, () => {
    console.log("Server running")
  })

