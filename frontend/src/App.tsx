import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import BookList from "./components/book-list";
import HomePage from "./components/home";
import NotFoundPage from "./components/not-found";
import BookDetails from "./components/book-details";
import Footer from "./components/footer";

import type { BookDataInterface } from "./types/book-interfaces";
import { defaultBookDetails } from "./types/book-interfaces";

function App() {
  const [route, setRoute] = useState("home-page");
  const [idBook, setIdBook] = useState(0);
  const [createBook, setCreateBook] = useState(false);

  const [screen, setScreen] = useState<React.ReactNode>(null);
  const [listBooksAPI, setListBooksAPI] = useState<BookDataInterface[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("data", data);
        setListBooksAPI(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    switch (route) {
      case "home-page":
        setScreen(<HomePage setRoute={setRoute} />);
        break;
      case "book-list":
        setScreen(
          <BookList
            setCreateBook={setCreateBook}
            setBook={setIdBook}
            setRoute={setRoute}
            ListBooksAPI={listBooksAPI}
          />
        );
        break;
      case "book-details":
        setScreen(
          <BookDetails
            createBook={createBook}
            setCreateBook={setCreateBook}
            setRoute={setRoute}
            setBookList={setListBooksAPI}
            bookList={listBooksAPI}
            BookDetails={
              createBook
                ? defaultBookDetails
                : listBooksAPI.find((book) => book.id === idBook)
            }
          />
        );
        break;
      default:
        setScreen(<NotFoundPage setRoute={setRoute} />);
        break;
    }
  }, [route, listBooksAPI, idBook, createBook]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="flex flex-col items-center justify-center h-screen">
        {screen}
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
