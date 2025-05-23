import { Button } from "./ui/button";
import { BookDataInterface, BookListProps } from "@//types/book-interfaces";
import EmptyListImg from "@/assets/empty-list.png";

export default function BookList({
  setBook,
  setRoute,
  ListBooksAPI,
}: BookListProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 mb-8">
        <Button
          onClick={() => setRoute("home-page")}
          className="rounded-full font-roboto font-bold"
          variant="ghost"
        >
          <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        </Button>
        <div className="flex flex-col shadow-xl w-[80vw] h-[80vh] overflow-y-auto max-w-md rounded-2xl p-4 bg-white">
          <div className="flex justify-around items-center my-4">
            <div className="rounded-2xl font-roboto font-bold w-full h-full flex items-center justify-center max-h-[10vh] p-4 bg-gray-100">
              <p className="text-center">
                Dados obtidos via backend local, que consulta a PotterAPI
                externa.
              </p>
            </div>
          </div>
          {ListBooksAPI.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-1/2">
              <img
                src={EmptyListImg}
                alt="Imagem de lista vazia"
                className="w-32 h-32 mb-4"
              />
              <p className="text-center font-roboto font-bold text-lg">
                Nenhum livro encontrado. <br />
                Adicione um livro clicando no botão acima.
              </p>
            </div>
          )}
          {ListBooksAPI.map((book: BookDataInterface) => (
            <div
              className="flex flex-col my-2 shadow-lg rounded-2xl"
              key={book.number}
            >
              <Button
                variant="secondary"
                className="w-full h-full flex items-center justify-start shadow-sm max-h-[10vh] rounded-2xl p-4 "
                onClick={() => {
                  setBook(book.number);
                  setRoute("book-details");
                }}
              >
                <img
                  src={book.cover}
                  alt="Capa do livro"
                  className="rounded-2xl max-h-[8vh] max-w-[7vw] mr-2 border-2 border-white shadow-lg"
                />

                <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap font-roboto">
                  {book.title}
                </p>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
