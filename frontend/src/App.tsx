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

  const [screen, setScreen] = useState<React.ReactNode>(null);
  const [listBooksAPI, setListBooksAPI] = useState<BookDataInterface[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:4000/books", {
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
            setBook={setIdBook}
            setRoute={setRoute}
            ListBooksAPI={listBooksAPI}
          />
        );
        break;
      case "book-details":
        setScreen(
          <BookDetails
            setRoute={setRoute}
            bookDetails={
              listBooksAPI.find((book) => book.number === idBook) ||
              defaultBookDetails
            }
          />
        );
        break;
      default:
        setScreen(<NotFoundPage setRoute={setRoute} />);
        break;
    }
  }, [route, listBooksAPI, idBook]);

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
