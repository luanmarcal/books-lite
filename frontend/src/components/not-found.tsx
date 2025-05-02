import NotFoundImg from "@/assets/not-found.png";
import { Button } from "./ui/button";

export default function NotFoundPage({
  setRoute,
}: {
  setRoute: (route: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <img src={NotFoundImg} alt="Logo do Books Lite" className="w-32 h-32" />
        <p className="text-center font-semibold text-lg max-w-xs font-roboto">
          Página não encontrada.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-16">
        <Button
          className="w-48 font-roboto font-semibold rounded-2xl"
          onClick={() => setRoute("home-page")}
        >
          Voltar para o início
        </Button>
      </div>
    </>
  );
}
