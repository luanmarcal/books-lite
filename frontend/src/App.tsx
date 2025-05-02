import BookList from "./components/book-list";
import HomePage from "./components/home";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import NotFoundPage from "./components/not-found";
import BookDetails from "./components/book-details";
import Footer from "./components/footer";
import type { BookDetailsInterface } from "./components/book-details";

function App() {
  const [route, setRoute] = useState("home-page");
  const [idBook, setIdBook] = useState(0);
  const [createBook, setCreateBook] = useState(false);

  const [screen, setScreen] = useState<React.ReactNode>(null);
  const [listBooksAPI, setListBooksAPI] = useState<BookDetailsInterface[]>([]);

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
    if (route === "home-page") {
      setScreen(<HomePage setRoute={setRoute} />);
    } else if (route === "book-list") {
      setScreen(
        <BookList
          setCreateBook={setCreateBook}
          setBook={setIdBook}
          setRoute={setRoute}
          ListBooksAPI={listBooksAPI}
        />
      );
    } else if (route === "book-details") {
      setScreen(
        <BookDetails
          setCreateBook={setCreateBook}
          createBook={createBook}
          setRoute={setRoute}
          bookList={listBooksAPI}
          setBookList={setListBooksAPI}
          BookDetails={
            createBook
              ? {
                  id: 0,
                  title: "",
                  authors: [""],
                  isbn: 0,
                  edition: "",
                  year: 0,
                  publisher: "",
                  pages: 0,
                  purchaseLink: "",
                  coverUrl: "",
                }
              : listBooksAPI.find((book) => book.id === idBook)
          }
        />
      );
    } else {
      setScreen(<NotFoundPage setRoute={setRoute} />);
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
