import { X, Trash, Edit } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  BookDataInterface,
  BookDetailsProps,
  defaultBookDetails,
} from "@/types/book-interfaces";

export default function BookDetails({
  createBook,
  setCreateBook,
  setRoute,
  setBookList,
  bookList,
  BookDetails,
}: BookDetailsProps) {
  const [onEdit, setOnEdit] = useState(false);
  const [titleBook] = useState(BookDetails?.title);

  const [bookDetails, setBookDetails] = useState<BookDataInterface>(
    BookDetails || defaultBookDetails
  );

  const handleDeleteButton = async () => {
    console.log("Delete button clicked");
    const updatedBookList = bookList.filter(
      (book) => book.id !== bookDetails.id
    );

    const response = await fetch("http://localhost:4000/posts", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bookDetails.id }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    setBookList(updatedBookList);
    setCreateBook(false);
    setRoute("book-list");
  };

  const handleEditButton = () => {
    console.log("Edit button clicked");
    setOnEdit(!onEdit);
  };

  const handleBackButton = () => {
    console.log("Back button clicked");
    setRoute("book-list");
  };

  const handleInputChange = (field: string, value: string) => {
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleConfirmEditButton = async () => {
    const updatedBookList = bookList.filter(
      (book) => book.id !== bookDetails.id
    );
    const newBookDetails = {
      ...bookDetails,
      id: bookDetails.id ? bookDetails.id : Math.floor(Math.random() * 1000),
    };

    updatedBookList.push(newBookDetails);

    const response = await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookList),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    setRoute("book-list");
    setBookList(updatedBookList);

    setCreateBook(false);
    setOnEdit(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 mb-8">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <div className="flex flex-col shadow-xl w-[80vw] h-[80vh] overflow-y-auto max-w-md rounded-2xl p-4 bg-white">
          <div className="flex justify-start items-center my-4">
            <div className="w-full">
              {!onEdit ? (
                <Button
                  className="rounded-full font-roboto font-bold"
                  variant="secondary"
                  onClick={handleBackButton}
                >
                  <X />
                </Button>
              ) : null}
            </div>

            <div className="flex flex-line space-x-2">
              {!onEdit && !createBook ? (
                <>
                  <Button
                    className="rounded-full font-roboto font-bold"
                    variant="secondary"
                    onClick={handleEditButton}
                  >
                    <Edit />
                  </Button>
                  <Button
                    className="rounded-full font-roboto font-bold"
                    variant="secondary"
                    onClick={handleDeleteButton}
                  >
                    <Trash />
                  </Button>
                </>
              ) : !createBook ? (
                <Button
                  className="rounded-full font-roboto font-bold"
                  variant="secondary"
                  onClick={handleEditButton}
                >
                  <X />
                </Button>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col my-2">
            {!createBook ? (
              <div className="w-full h-full flex items-center justify-center max-h-[10vh] rounded-2xl p-4">
                <img
                  src={bookDetails.coverUrl}
                  alt="Capa do livro"
                  className="rounded-2xl max-h-[8vh] max-w-[7vw] mr-2 border-2 border-white shadow-lg"
                />

                <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap font-roboto">
                  {titleBook}
                </p>
              </div>
            ) : null}

            <div className="flex flex-col my-2 space-y-3 p-4">
              <div>
                <label className="font-roboto font-bold">Nome do Livro:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  value={bookDetails.title}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Autores:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("authors", e.target.value)}
                  value={bookDetails.authors}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">ISBN:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("isbn", e.target.value)}
                  value={bookDetails.isbn}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Edição:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("edition", e.target.value)}
                  value={bookDetails.edition}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Ano:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                  value={bookDetails.year}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Editora:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) =>
                    handleInputChange("publisher", e.target.value)
                  }
                  value={bookDetails.publisher}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Qtd. Páginas:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) => handleInputChange("pages", e.target.value)}
                  value={bookDetails.pages}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Link de Compra:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) =>
                    handleInputChange("purchaseLink", e.target.value)
                  }
                  value={bookDetails.purchaseLink}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">URL da Capa:</label>
                <Input
                  type="text"
                  disabled={!onEdit && !createBook}
                  onChange={(e) =>
                    handleInputChange("coverUrl", e.target.value)
                  }
                  value={bookDetails.coverUrl}
                  className="my-1"
                />
              </div>

              <div className="flex">
                <Button
                  disabled={!onEdit && !createBook}
                  className="font-roboto font-bold rounded-2xl w-full mt-5"
                  onClick={handleConfirmEditButton}
                >
                  Confirmar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
