import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  BookDataInterface,
  BookDetailsProps,
  defaultBookDetails,
} from "@/types/book-interfaces";

export default function BookDetails({
  setRoute,
  bookDetails,
}: BookDetailsProps) {
  const [localBookDetails] = useState<BookDataInterface>(
    bookDetails || defaultBookDetails
  );

  const handleBackButton = () => {
    console.log("Back button clicked");
    setRoute("book-list");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8 mb-8">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <div className="flex flex-col shadow-xl w-[80vw] h-[80vh] overflow-y-auto max-w-md rounded-2xl p-4 bg-white">
          <div className="flex justify-start items-center my-4">
            <div className="w-full">
              <Button
                className="rounded-full font-roboto font-bold"
                variant="secondary"
                onClick={handleBackButton}
              >
                <X />
              </Button>
            </div>
          </div>

          <div className="flex flex-col my-2">
            <div className="w-full h-full flex items-center justify-center max-h-[10vh] rounded-2xl p-4">
              <img
                src={localBookDetails.cover}
                alt="Capa do livro"
                className="rounded-2xl max-h-[8vh] max-w-[7vw] mr-2 border-2 border-white shadow-lg"
              />

              <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap font-roboto">
                {localBookDetails.title}
              </p>
            </div>

            <div className="flex flex-col my-2 space-y-3 p-4">
              <div>
                <label className="font-roboto font-bold">
                  Nome Original do Livro:
                </label>
                <Input
                  type="text"
                  disabled={true}
                  value={localBookDetails.originalTitle}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">
                  Descrição do Livro:
                </label>
                <textarea
                  readOnly
                  value={localBookDetails.description}
                  className="my-1 w-full rounded border border-gray-300 p-2 font-roboto resize-y min-h-[120px] bg-gray-100"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Ano:</label>
                <Input
                  type="text"
                  disabled={true}
                  value={localBookDetails.releaseDate}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">Qtd. Páginas:</label>
                <Input
                  type="text"
                  disabled={true}
                  value={localBookDetails.pages}
                  className="my-1"
                />
              </div>

              <div>
                <label className="font-roboto font-bold">URL da Capa:</label>
                <Input
                  type="text"
                  disabled={true}
                  value={localBookDetails.cover}
                  className="my-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
