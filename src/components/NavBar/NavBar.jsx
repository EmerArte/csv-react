import { BrowserRouter } from "react-router-dom";
import useIPAddress from "../../hooks/useIpAddress";
import formatDate from "../../utils/FormatDate";
import Title from "../Title/Title";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const time = formatDate(new Date());

const NavBar = () => {
  const [ipAddress, setIpAddress] = useIPAddress("");
  const location = useLocation();
  return (
    <div className="grid grid-row-3 w-full">
      <div className="row-1 my-10 text-right">
        <p className=" font-medium text-text ">Último ingreso {time}</p>
        <p className=" font-medium text-text ">Dirección IP: {ipAddress}</p>
      </div>
      <div className="row-1 my-1 text-left">
        <Title className="text-title">{location.pathname == "/" ? "Cargue de facturas en dos pasos" :
        location.pathname == "/billing" ? "Cargue de facturas" : "404 Invalid path"}</Title>
      </div>

      <div className="row-1 flex flex-row space-x-2">
        <NavLink
          to={"/"}
          className="w-20 h-1 bg-primary rounded-sm"
        />
        <NavLink
          to={"/billing"}
          className={({ isActive }) =>
            isActive
              ? "w-20 h-1 bg-primary transition delay-150 rounded-sm"
              : "bg-disabled w-20 h-1 transition delay-150 rounded-sm"
          }
        />
      </div>
    </div>
  );
};

export default NavBar;
