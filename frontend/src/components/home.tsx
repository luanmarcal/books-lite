import BookLogo from "@/assets/book-logo.png";
import { Button } from "./ui/button";

export default function HomePage({
  setRoute,
}: {
  setRoute: (route: string) => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-semibold font-righteous">Books Lite</h1>
        <img src={BookLogo} alt="Logo do Books Lite" className="w-32 h-32" />
        <p className="text-center font-semibold text-lg max-w-xs font-roboto">
          Depois de aprender a ler, você será livre para sempre.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-16">
        <Button
          className="w-48 font-roboto font-semibold rounded-2xl"
          onClick={() => setRoute("book-list")}
        >
          Começar
        </Button>
      </div>
    </>
  );
}
