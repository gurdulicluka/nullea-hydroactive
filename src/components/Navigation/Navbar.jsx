import { useState, useEffect } from "react";
import "./Navbar.css";
import { cart } from "../../assets";
import ProgressBar from "../ProgressBar/ProgressBar";
import ErrorModal from "../ErrorModal/ErrorModal";
import { useModal } from "../../util/hooks";

const Navbar = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);
  // disable scrollbar when modal shown

  return (
    <header className={`wrapper ${visible ? "show" : "hide"}`}>
      <div className="header__container container">
        <nav className="navbar">
          <h1 className="navbar__logo">
            <a href="/">Nullea</a>
          </h1>
          <menu className="navbar__menu">
            <li onClick={openModal} className="products__btn">
              <a className="navbar__link" href="#;">
                Products
              </a>
            </li>
            <li className="navbar__route">
              <a className="navbar__link" href="#about">
                About
              </a>
            </li>
            <li className="navbar__route">
              <a className="navbar__link" href="#map">
                Stores
              </a>
            </li>
          </menu>
        </nav>
        <div className="navbar__cart">
          <button className="cart__button">
            <img className="cart__icon" src={cart} alt="cart" />
          </button>
        </div>
      </div>
      <ProgressBar />
      {isOpen && <ErrorModal close={closeModal} />}
    </header>
  );
};

export default Navbar;
