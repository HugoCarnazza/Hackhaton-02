/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import BurgerMenu from "./BurgerMenu";
import addSymbol from "../assets/add_symbol.png";
import interrogation from "../assets/interrogation.png";
import logoEm from "../assets/logo-em2.png";

function NavBar({ openModalToggle, burgerOpen, setBurgerOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav flex items-center md:flex-col justify-between fixed top-0 left-0 w-screen md:w-1/5 md:h-screen z-10 md:z-0 text-white  bg-[#002743]">
        <div className="flex flex-col items-center gap-20 md:w-full">
          <div className="flex flex-col items-center gap-7">
            <Link
              to="/"
              className="w-[40%] ml-[8px] my-[8px] md:w-[75%] md:mt-[56px] mx-auto"
            >
              <img src={logoEm} alt="logo" className="w-[100px] self-center" />
            </Link>
            <p className="hidden md:block text-[24px] text-center">
              EMMAÜS <br />
              CONNECT
            </p>
          </div>
          <div className="navbar-buttons hidden w-[100%] px-7 md:flex flex-col gap-[4rem] text-lg">
            <button
              type="button"
              className="flex items-center align-baseline gap-3 w-[100%]"
              onClick={openModalToggle}
            >
              <img src={addSymbol} alt="symbole plus" className="w-[20px]" />
              <p>Estimer un smartphone</p>
            </button>

            <Link
              to="/upload"
              className="flex items-center text-center align-baseline gap-3 w-[100%]"
            >
              <img src={addSymbol} alt="symbole plus" className="w-[20px]" />
              <p>Ajouter des références</p>
            </Link>
          </div>
        </div>
        <div className="w-[100%] hidden md:flex flex-col items-center justify-between">
          <button
            type="button"
            className="flex items-center justify-center gap-3 w-[100%] mb-[56px]"
            onClick={() => navigate("/faq")}
          >
            <img src={interrogation} alt="symbole plus" />
            <p>FAQ</p>
          </button>
        </div>
        <div className="flex md:hidden">
          <Hamburger
            toggled={burgerOpen}
            toggle={() => setBurgerOpen(!burgerOpen)}
            openModalToggle={openModalToggle}
          />
        </div>
      </div>
      <BurgerMenu
        burgerOpen={burgerOpen}
        setBurgerOpen={setBurgerOpen}
        openModalToggle={openModalToggle}
      />
    </>
  );
}

export default NavBar;
