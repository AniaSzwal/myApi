const express = require('express');
const cors =require('cors')

const app = express();

// import routes
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');
const testimonialsRoutes = require('./routes/testimonials.routes');


app.use(express.urlencoded({ extended: false })); //ten middleware umożliwia obsługę formularzy x-www-form-urlencoded
app.use(express.json()); //middleware, który odbiera dane w formacie JSON (mogą być wysyłane za pomocą form-data)
app.use(cors()); // paczka cors pozwala w łatwy sposób odblokować wszystkie połączenia. Dzieki cors Możemy np. ustawić, że nasze API pozwala na połączenie tylko i wyłączne z konkretnej domeny oraz z konkretnych metod, albo – co istotne dla publicznych API – z każdej domeny.


app.use('/api', concertsRoutes); // add concerts routes to server
app.use('/api', seatsRoutes); // add seats routes to server
app.use('/api', testimonialsRoutes); // add testimonials routes to server

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});