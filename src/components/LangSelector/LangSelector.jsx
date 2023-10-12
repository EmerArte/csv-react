import Bandera_Colombia from "../../assets/Bandera_Colombia.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import Span from "../Span/Span";

const LangSelector = () => {
  return (
    <div className="hidden md:flex flex-row  h-full mx-4 items-center">
      <img src={Bandera_Colombia} alt="Lang" className="max-h-3 h-3 mx-1.5" />
      <Span>Es</Span>
      <RiArrowDownSLine className="text-white" />
    </div>
  );
};
export default LangSelector;
