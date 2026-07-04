import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Meet from "./pages/Meet";
import Classes from "./pages/Classes";
import Projects from "./pages/Projects";
import SccConnect from "./pages/SccConnect";
import SlideShow from "./pages/SlideShow";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/meet" element={<Meet />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/scc-connect" element={<SccConnect />} />
            <Route path="/projects/scc-connect/:deckId" element={<SlideShow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
