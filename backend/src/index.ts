const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let cachedBooks: any[] = [];
let lastFetch = 0;
const CACHE_DURATION = 5 * 60 * 1000;

// routes
app.get("/", (req: any, res: any) => {
  res.send(`backend is running on port ${port}`);
});

app.get("/books", async (req: any, res: any) => {
  const now = Date.now();

  // Check if the cache is still valid
  if (cachedBooks.length > 0 && now - lastFetch < CACHE_DURATION) {
    return res.json(cachedBooks);
  }

  const books = await axios.get(
    "https://potterapi-fedeperin.vercel.app/pt/books"
  );

  const data = books.data.map((book: any) => ({
    number: book.number,
    title: book.title,
    originalTitle: book.originalTitle,
    releaseDate: book.releaseDate,
    description: book.description,
    pages: book.pages,
    cover: book.cover,
  }));

  cachedBooks = data;
  lastFetch = now;

  console.log("Dados atualizados da API externa.");

  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
