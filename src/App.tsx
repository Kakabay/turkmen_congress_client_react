import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LanguageSync from "./lang-sync";
import ReactLenis from "lenis/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col">
        <LanguageSync />
        <Header />

        <main className="flex-auto" id="home">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
