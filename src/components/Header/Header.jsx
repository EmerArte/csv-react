import Logo from "../../assets/Vector.svg";
import styled from "styled-components";
import {RiArrowDownSLine} from 'react-icons/ri';
import LangSelector from "../LangSelector/LangSelector";
import Span from "../Span/Span";
import ButtonToggle from "../ToggleButton/ToggleButton";

const Header = () => {
  return (
    <header className="bg-secondary w-full h-16 sticky top-0 left-0 flex justify-center">
      <div className="fixed top-0 left-0 max-h-16 h-16">
        <div className="flex h-full items-center ml-6">
          <img src={Logo} alt="logo" className="max-h-10 mr-6" />
          <ButtonToggle label="Modo oscuro"></ButtonToggle>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center h-full w-[80%]">
        <div className="h-full bg-accent w-64 hidden md:flex  justify-around items-center">
          <Span>Hola, Camilo</Span>
          <RiArrowDownSLine className="text-white font-bold"/>
        </div>
        <LangSelector></LangSelector>
      </div>
    </header>
  );
};

export default Header;
