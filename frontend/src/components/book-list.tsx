import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function BookList({
  setRoute,
}: {
  setRoute: (route: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <div className="flex flex-col shadow-xl w-[80vw] h-[80vh] overflow-y-auto max-w-md rounded-2xl p-4 bg-white">
          <div className="flex justify-around items-center my-4">
            <Button
              className="rounded-2xl font-roboto font-bold w-full"
              onClick={() => setRoute("home")}
            >
              <Plus />
              Adicionar Livro
            </Button>
          </div>

          <div className="flex flex-col my-2">
            <Button
              variant="secondary"
              className="w-full h-full flex items-center justify-start shadow-sm max-h-[10vh] rounded-2xl p-4 "
              onClick={() => setRoute("home")}
            >
              <img
                src="https://a-static.mlcdn.com.br/470x352/livro-harry-potter-e-a-pedra-filosofal-j-k-rowling/magazineluiza/223260000/dd30323cff02c02a65bd24df60163a93.jpg"
                alt="Capa do livro"
                className="rounded-2xl max-h-[8vh] max-w-[7vw] mr-2 border-2 border-white shadow-lg"
              />

              <p className="font-bold text-lg overflow-hidden text-ellipsis whitespace-nowrap font-roboto">
                Harry Potter e a Pedra Filosofal
              </p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
