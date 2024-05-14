import express from 'express';
const app = express();
const PORT = 4000;

let books = [
    { id: 1, title: 'The Great Gatsby', autor: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', autor: 'Harper Lee' },
    { id: 3, title: '1984', autor: 'George Orwell' }
]


//Middleware för att hantera JSON-data
app.use(express.json());

//Route för att hämta alla böcker.

app.get('/books', (require, response) => {
    response.json(books);
});

//Route för att lägga till en bok
app.post('/books', (req, res) => {
    const { title, autor } = req.body;
    if (!title || !autor) {
        return res.status(400).json({ error: 'Title and author are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        autor
    };
    books.push(newBook);
    res.status(201).json(newBook);
});


// Starta servern
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});