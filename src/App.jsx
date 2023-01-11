import { useScreen } from "./util/hooks";
import React, { useEffect, useState } from "react";
import MobileMenu from "./components/Navigation/MobileMenu.jsx";
import Navbar from "./components/Navigation/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Statement from "./components/Statement/Statement";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import Stores from "./components/Stores/Stores";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import PageLoader from "./components/PageLoader/PageLoader";

function App() {
  const { sm } = useScreen();
  const [loading, setLoading] = useState(true);
  const animated = !!sessionStorage.getItem("animated");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    // go on top of the page when refreshed
  }, []);

  const animationHandler = () => {
    setLoading(false);
    sessionStorage.setItem("animated", true);
  };

  useEffect(() => {
    setTimeout(() => animationHandler(), 2800);
  }, []);

  if (loading && animated === false) {
    return <PageLoader />;
  }

  return (
    <div className="wrapperOuter">
      {sm ? <MobileMenu /> : <Navbar />}
      <Hero />
      <main className="container">
        <Statement />
        <About />
        <Reviews />
        <Stores />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
