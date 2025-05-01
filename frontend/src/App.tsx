import BookList from "./components/book-list";
import HomePage from "./components/home";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [route, setRoute] = useState("home");
  const [screen, setScreen] = useState<React.ReactNode>(null);

  useEffect(() => {
    if (route === "home") {
      setScreen(<HomePage setRoute={setRoute} />);
    } else if (route === "book-list") {
      setScreen(<BookList setRoute={setRoute} />);
    } else if (route === "settings") {
      setScreen(<div>Settings Page</div>);
    } else {
      setScreen(<div>404 Not Found</div>);
    }
  }, [route]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="flex flex-col items-center justify-center h-screen">
        {screen}
      </main>
    </ThemeProvider>
  );
}

export default App;
