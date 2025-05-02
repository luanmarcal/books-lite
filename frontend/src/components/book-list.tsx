import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { BookDetailsInterface } from "./book-details";

export default function BookList({
  setCreateBook,
  setBook,
  setRoute,
  ListBooksAPI,
}: {
  setCreateBook: (createBook: boolean) => void;
  setBook: (book: number) => void;
  setRoute: (route: string) => void;
  ListBooksAPI: BookDetailsInterface[];
}) {
  //   const [BookDetailsList, setBookDetailsList] = useState<BookDetailsInterface[]>(
  //     ListBooksAPI
  //   );

  //   useEffect(() => {
  //     setBookDetailsList(ListBooksAPI);
  //   }, [ListBooksAPI]);

  //   if (!BookDetailsList) {
  //     return <div>Loading...</div>;
  // }
  // const setRoute = BookDetailsList[0]?.setRoute;

  // const mountList = () => {
  //   BookDetailsList.map((book: BookDetailsInterface) => {
  //     return (
  //       <div className="flex flex-col my-2" key={book.id}>
  //         <Button
  //           variant="secondary"
  //           className="w-full h-full flex items-center justify-start shadow-sm max-h-[10vh] rounded-2xl p-4 "
  //           onClick={() => setRoute("book-details")}
  //         >
  //           <img
  //             src={book.coverUrl}
  //             alt="Capa do livro"
  //             className="rounded-2xl max-h-[8vh] max-w-[7vw] mr-2 border-2 border-white shadow-lg"
  //           />

  //           <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap font-roboto">
  //             {book.title}
  //           </p>
  //         </Button>
  //       </div>
  //     );
  //   });
  // };

  const handleCreateBookButton = () => {
    // Implement create book functionality here
    console.log("Create book button clicked");
    setCreateBook(true);
    setRoute("book-details");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 mb-8">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <div className="flex flex-col shadow-xl w-[80vw] h-[80vh] overflow-y-auto max-w-md rounded-2xl p-4 bg-white">
          <div className="flex justify-around items-center my-4">
            <Button
              className="rounded-2xl font-roboto font-bold w-full"
              onClick={handleCreateBookButton}
            >
              <Plus />
              Adicionar Livro
            </Button>
          </div>
          {ListBooksAPI.map((book: BookDetailsInterface) => (
            <div className="flex flex-col my-2" key={book.id}>
              <Button
                variant="secondary"
                className="w-full h-full flex items-center justify-start shadow-sm max-h-[10vh] rounded-2xl p-4 "
                onClick={() => {
                  setBook(book.id);
                  setRoute("book-details");
                }}
              >
                <img
                  src={book.coverUrl}
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
