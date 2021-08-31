const express = require('express');
const cors =require('cors')

const app = express();
app.use(express.urlencoded({ extended: false })); //ten middleware umożliwia obsługę formularzy x-www-form-urlencoded
app.use(express.json()); //middleware, który odbiera dane w formacie JSON (mogą być wysyłane za pomocą form-data)
app.use(cors()); // paczka cors pozwala w łatwy sposób odblokować wszystkie połączenia. Dzieki cors Możemy np. ustawić, że nasze API pozwala na połączenie tylko i wyłączne z konkretnej domeny oraz z konkretnych metod, albo – co istotne dla publicznych API – z każdej domeny.

const db = [ //Aby przechowywać referencje od klientów firmy, potrzebujemy bazę danych --> tutaj w formie tablicy
    { id: 1, author: 'John Doe', text: 'This company is worth every coin!' }, //tablica bedzie czytac ID:1=2 (czy mma racje?)
    { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
];

app.get('/testimonials', (req, res) => {
    res.json(db);
});

app.get('/testimonials/:id', (req, res) => {
    res.json(db[`${req.params.id}`]);
});

app.get('/testimonials/random', (req, res) => {
    // let randomNum = Math.floor(Math.random() * db.length)
    // res.json(db[randomNum]);
    res.json({message: 'OK'});
});


app.post('/testimonials', (req, res) => {
    req.body.id = uuidv4();
    req.body.author;
    req.body.text;

    db.push(req.body);
    res.json({message: 'OK'});
});

app.put('/testimonials/:id', (req, res) => {
    db[`${req.params.id}`].author = req.body.author;
    db[`${req.params.id}`].text = req.body.text;
    res.json({message: 'OK'});
});

app.delete('/testimonials/:id', (req, res) => {
    db.splice(`${req.params.id}`, 1);
    res.json({message: 'OK'});
});

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});