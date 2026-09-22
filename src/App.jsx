import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Conclusion from "./pages/Conclusion";

import Decoration from "./components/Decoration";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const goNext = () => {
    setCurrentPage((page) => Math.min(page + 1, 4));
  };

  const goBack = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  return (
    <main className="app">

      {/* Floating bubbles appear across the whole portfolio */}
      <Decoration />

      {currentPage === 1 && (
        <Home onEnter={goNext} />
      )}

      {currentPage === 2 && (
        <Profile
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {currentPage === 3 && (
        <About
          onNext={goNext}
          onBack={goBack}
        />
      )}

      {currentPage === 4 && (
        <Conclusion
          onNext={goNext}
          onBack={goBack}
          onStartAgain={() => setCurrentPage(1)}
        />
      )}

    </main>
  );
}

export default App;